/**
 * Layer 1: Data Integrity Test
 * Validates dispatched data to ensure it's not corrupted during transmission
 * Used when receiving data from external sources (GitHub Actions, API calls, etc.)
 */

export class DataIntegrityError extends Error {
  constructor(message: string, public field?: string) {
    super(message)
    this.name = 'DataIntegrityError'
  }
}

/**
 * Validates that dispatched data has all required fields and they are non-empty
 * This is the first line of defense against corrupted data
 */
export function validateDataIntegrity(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  // Define required fields that must be non-empty
  const requiredFields = {
    id: 'string',
    name: 'string', 
    description: 'string',
    version: 'string',
    author: 'object',
    api_version: 'string'
  }

  // Check if data exists
  if (!data || typeof data !== 'object') {
    errors.push('Data is missing or not an object')
    return { isValid: false, errors }
  }

  // Check each required field
  for (const [field, expectedType] of Object.entries(requiredFields)) {
    if (!(field in data)) {
      errors.push(`Required field '${field}' is missing`)
      continue
    }

    const value = data[field]
    
    // Check if field is empty/null/undefined
    if (value === null || value === undefined) {
      errors.push(`Required field '${field}' is null or undefined`)
      continue
    }

    // Check type
    if (typeof value !== expectedType) {
      errors.push(`Field '${field}' must be of type '${expectedType}', got '${typeof value}'`)
      continue
    }

    // Check if string fields are non-empty
    if (expectedType === 'string' && value.trim() === '') {
      errors.push(`String field '${field}' cannot be empty`)
      continue
    }

    // Special validation for author object
    if (field === 'author') {
      if (!value.name || typeof value.name !== 'string' || value.name.trim() === '') {
        errors.push(`Field 'author.name' is required and must be a non-empty string`)
      }
    }
  }

  // Check optional array fields if they exist
  if ('tags' in data) {
    if (!Array.isArray(data.tags)) {
      errors.push(`Field 'tags' must be an array if provided`)
    } else {
      const invalidTags = data.tags.filter((tag: any) => 
        typeof tag !== 'string' || tag.trim() === ''
      )
      if (invalidTags.length > 0) {
        errors.push(`All tags must be non-empty strings`)
      }
    }
  }

  // Check permissions array if it exists
  if ('permissions' in data) {
    if (!Array.isArray(data.permissions)) {
      errors.push(`Field 'permissions' must be an array if provided`)
    } else {
      const invalidPermissions = data.permissions.filter((perm: any) => 
        typeof perm !== 'string' || perm.trim() === ''
      )
      if (invalidPermissions.length > 0) {
        errors.push(`All permissions must be non-empty strings`)
      }
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

/**
 * Utility function to validate multiple data objects at once
 * Useful for batch validation of dispatched data
 */
export function validateDataIntegrityBatch(dataArray: any[]): { 
  valid: any[]; 
  invalid: Array<{ data: any; errors: string[] }>;
  summary: { total: number; valid: number; invalid: number }
} {
  if (!Array.isArray(dataArray)) {
    throw new DataIntegrityError('Input must be an array')
  }

  const valid: any[] = []
  const invalid: Array<{ data: any; errors: string[] }> = []

  for (const data of dataArray) {
    const result = validateDataIntegrity(data)
    
    if (result.isValid) {
      valid.push(data)
    } else {
      invalid.push({ data, errors: result.errors })
    }
  }

  return { 
    valid, 
    invalid, 
    summary: {
      total: dataArray.length,
      valid: valid.length,
      invalid: invalid.length
    }
  }
}
