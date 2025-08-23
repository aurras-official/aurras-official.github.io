/**
 * Layer 2: Schema Validation Test  
 * Validates manifest.json files against the official schema
 * Used when validating generated manifest.json files for structure and content
 */

export class SchemaValidationError extends Error {
  constructor(message: string, public field?: string) {
    super(message)
    this.name = 'SchemaValidationError'
  }
}

/**
 * Validates manifest.json structure and content against official schema
 * This ensures the generated manifest files follow the correct format
 */
export function validateManifestSchema(manifestData: any): { 
  isValid: boolean; 
  errors: string[]; 
  warnings: string[] 
} {
  const errors: string[] = []
  const warnings: string[] = []

  // Basic structure check (should pass data integrity first)
  if (!manifestData || typeof manifestData !== 'object') {
    errors.push('Manifest data is missing or not an object')
    return { isValid: false, errors, warnings }
  }

  // Required fields check
  const requiredFields = ['id', 'name', 'description', 'version', 'author', 'api_version']
  for (const field of requiredFields) {
    if (!(field in manifestData) || manifestData[field] === null || manifestData[field] === undefined) {
      errors.push(`Required field '${field}' is missing`)
    }
  }

  // If basic requirements fail, don't continue with detailed validation
  if (errors.length > 0) {
    return { isValid: false, errors, warnings }
  }

  // Schema-specific validations

  // Version format validation (semantic versioning)
  const versionPattern = /^\d+\.\d+\.\d+(-[a-zA-Z0-9-]+)?$/
  if (!versionPattern.test(manifestData.version)) {
    errors.push(`Version '${manifestData.version}' must follow semantic versioning (e.g., 1.0.0, 2.1.3-beta)`)
  }

  // API version validation
  const validApiVersions = ['1.0']
  if (!validApiVersions.includes(manifestData.api_version)) {
    errors.push(`API version '${manifestData.api_version}' is not supported. Valid versions: ${validApiVersions.join(', ')}`)
  }

  // ID format validation (lowercase, numbers, hyphens only)
  const idPattern = /^[a-z0-9-]+$/
  if (!idPattern.test(manifestData.id)) {
    errors.push(`Plugin ID '${manifestData.id}' must contain only lowercase letters, numbers, and hyphens`)
  }

  if (manifestData.id.length < 3 || manifestData.id.length > 50) {
    errors.push(`Plugin ID must be between 3-50 characters`)
  }

  // Name validation
  if (manifestData.name.length < 1 || manifestData.name.length > 100) {
    errors.push(`Plugin name must be between 1-100 characters`)
  }

  // Description length validation
  if (manifestData.description.length < 10) {
    errors.push(`Description must be at least 10 characters long`)
  }

  if (manifestData.description.length > 500) {
    errors.push(`Description must be no more than 500 characters`)
  }

  // Author validation
  if (typeof manifestData.author !== 'object' || !manifestData.author.name) {
    errors.push(`Author must be an object with a 'name' field`)
  } else {
    if (manifestData.author.name.length < 1 || manifestData.author.name.length > 100) {
      errors.push(`Author name must be between 1-100 characters`)
    }
    
    // Email validation (if provided)
    if (manifestData.author.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(manifestData.author.email)) {
      errors.push(`Author email '${manifestData.author.email}' is not a valid email address`)
    }
  }

  // Category validation (if provided)
  if (manifestData.category) {
    const validCategories = [
      'audio', 'integration', 'interface', 'utility', 'theme', 
      'visualization', 'social', 'streaming', 'lyrics', 'metadata'
    ]
    if (!validCategories.includes(manifestData.category)) {
      errors.push(`Category '${manifestData.category}' is not valid. Valid categories: ${validCategories.join(', ')}`)
    }
  } else {
    warnings.push(`Category is not specified - this will improve plugin discoverability`)
  }

  // Tags validation (if provided)
  if (manifestData.tags) {
    if (!Array.isArray(manifestData.tags)) {
      errors.push(`Tags must be an array`)
    } else {
      if (manifestData.tags.length > 10) {
        errors.push(`Too many tags. Maximum 10 tags allowed`)
      }

      const invalidTagFormats = manifestData.tags.filter((tag: any) => 
        typeof tag !== 'string' || !/^[a-z0-9-]+$/.test(tag)
      )
      if (invalidTagFormats.length > 0) {
        errors.push(`Tags must contain only lowercase letters, numbers, and hyphens`)
      }

      // Check for unique tags
      const uniqueTags = new Set(manifestData.tags)
      if (uniqueTags.size !== manifestData.tags.length) {
        warnings.push(`Duplicate tags found - only unique tags should be used`)
      }
    }
  } else {
    warnings.push(`Tags are not specified - adding tags will improve plugin discoverability`)
  }

  // URL validation (if provided)
  if (manifestData.homepage) {
    try {
      new URL(manifestData.homepage)
    } catch {
      errors.push(`Homepage '${manifestData.homepage}' is not a valid URL`)
    }
  }

  if (manifestData.repository) {
    try {
      new URL(manifestData.repository)
    } catch {
      errors.push(`Repository '${manifestData.repository}' is not a valid URL`)
    }
  }

  // License validation (if provided)
  if (manifestData.license) {
    // Common license identifiers (SPDX format)
    const commonLicenses = ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'ISC', 'MPL-2.0']
    if (!commonLicenses.includes(manifestData.license)) {
      warnings.push(`License '${manifestData.license}' is not a common SPDX identifier`)
    }
  } else {
    warnings.push(`License is not specified - this is important for legal clarity`)
  }

  // Dependencies validation (if provided)
  if (manifestData.dependencies) {
    if (typeof manifestData.dependencies !== 'object') {
      errors.push(`Dependencies must be an object`)
    } else {
      if (manifestData.dependencies.python && typeof manifestData.dependencies.python !== 'string') {
        errors.push(`dependencies.python must be a string`)
      }
      
      if (manifestData.dependencies.aurras && typeof manifestData.dependencies.aurras !== 'string') {
        errors.push(`dependencies.aurras must be a string`)
      }

      if (manifestData.dependencies.packages) {
        if (!Array.isArray(manifestData.dependencies.packages)) {
          errors.push(`dependencies.packages must be an array`)
        } else {
          const invalidPackages = manifestData.dependencies.packages.filter((pkg: any) => 
            typeof pkg !== 'string' || pkg.trim() === ''
          )
          if (invalidPackages.length > 0) {
            errors.push(`All package dependencies must be non-empty strings`)
          }
        }
      }
    }
  }

  // Permissions validation (if provided)
  if (manifestData.permissions) {
    if (!Array.isArray(manifestData.permissions)) {
      errors.push(`Permissions must be an array`)
    } else {
      const validPermissions = [
        'audio.playback', 'audio.metadata', 'network.http', 'network.websocket',
        'filesystem.read', 'filesystem.write', 'system.notifications',
        'ui.overlay', 'ui.sidebar', 'config.read', 'config.write'
      ]
      
      const invalidPermissions = manifestData.permissions.filter((perm: any) => 
        typeof perm !== 'string' || !validPermissions.includes(perm)
      )
      
      if (invalidPermissions.length > 0) {
        errors.push(`Invalid permissions: ${invalidPermissions.join(', ')}. Valid permissions: ${validPermissions.join(', ')}`)
      }
    }
  }

  // Assets validation (if provided)
  if (manifestData.assets) {
    if (typeof manifestData.assets !== 'object') {
      errors.push(`Assets must be an object`)
    } else {
      const assetFields = ['icon', 'screenshot', 'banner']
      for (const field of assetFields) {
        if (manifestData.assets[field] && typeof manifestData.assets[field] !== 'string') {
          errors.push(`assets.${field} must be a string if provided`)
        }
      }
    }
  }

  // Generate recommendations
  const recommendedFields = ['category', 'tags', 'license', 'homepage', 'repository']
  for (const field of recommendedFields) {
    if (!manifestData[field]) {
      warnings.push(`Recommended field '${field}' is missing`)
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  }
}

/**
 * Utility function to validate multiple manifest files
 * Useful for batch validation of manifest.json files
 */
export function validateManifestSchemaBatch(manifestArray: any[]): {
  valid: any[];
  invalid: Array<{ manifest: any; errors: string[] }>;
  allWarnings: string[];
  summary: { total: number; valid: number; invalid: number; totalWarnings: number }
} {
  if (!Array.isArray(manifestArray)) {
    throw new SchemaValidationError('Input must be an array')
  }

  const valid: any[] = []
  const invalid: Array<{ manifest: any; errors: string[] }> = []
  const allWarnings: string[] = []

  for (const manifest of manifestArray) {
    const result = validateManifestSchema(manifest)
    
    if (result.isValid) {
      valid.push(manifest)
      allWarnings.push(...result.warnings.map(w => `${manifest.id || 'unknown'}: ${w}`))
    } else {
      invalid.push({ manifest, errors: result.errors })
    }
  }

  return {
    valid,
    invalid,
    allWarnings,
    summary: {
      total: manifestArray.length,
      valid: valid.length,
      invalid: invalid.length,
      totalWarnings: allWarnings.length
    }
  }
}
