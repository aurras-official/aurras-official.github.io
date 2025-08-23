/**
 * Dynamic Auto-Discovery Marketplace Data
 * Server-side plugin discovery for Astro pages
 */

export interface MarketplacePlugin {
  id: string
  name: string
  description: string
  version: string
  author: {
    name: string
    email?: string
    url?: string
  }
  api_version: string
  category?: string
  tags: string[]
  license?: string
  permissions?: string[]
  homepage?: string
  repository?: string
  dependencies?: {
    python?: string
    packages?: string[]
    aurras?: string
  }
  entry_point?: string
  config_schema?: any
  assets?: {
    icon?: string
    screenshot?: string
    banner?: string
  }
}

/**
 * Server-side plugin discovery - only available in Astro pages
 * This function must be called in server context (Astro frontmatter)
 */
export async function discoverPlugins(): Promise<MarketplacePlugin[]> {
  // Import Node.js modules only on server side
  const { readdir, readFile } = await import('node:fs/promises')
  const { join } = await import('node:path')
  const { validateDataIntegrity } = await import('../utils/data-integrity-test')
  const { validateManifestSchema } = await import('../utils/schema-validation-test')
  
  const plugins: MarketplacePlugin[] = []
  const validationWarnings: string[] = []
  
  try {
    // Get the marketplace directory path
    const marketplaceDir = join(process.cwd(), 'src', 'data', 'marketplace')
    
    // Read all directories in marketplace folder
    const entries = await readdir(marketplaceDir, { withFileTypes: true })
    const pluginDirs = entries.filter(entry => entry.isDirectory())

    // Process each plugin directory
    for (const dir of pluginDirs) {
      try {
        const manifestPath = join(marketplaceDir, dir.name, 'manifest.json')
        const manifestContent = await readFile(manifestPath, 'utf-8')
        
        // Parse JSON
        let pluginData: any
        try {
          pluginData = JSON.parse(manifestContent)
        } catch (parseError) {
          console.error(`❌ JSON parsing failed for ${dir.name}: Invalid JSON format`)
          continue
        }
        
        // Layer 1: Data integrity validation (check for corruption)
        const integrityResult = validateDataIntegrity(pluginData)
        if (!integrityResult.isValid) {
          console.error(`❌ Data integrity failed for ${dir.name}:`)
          integrityResult.errors.forEach(error => console.error(`   - ${error}`))
          continue
        }
        
        // Layer 2: Schema validation (check manifest.json format)
        const schemaResult = validateManifestSchema(pluginData)
        if (!schemaResult.isValid) {
          console.error(`❌ Schema validation failed for ${dir.name}:`)
          schemaResult.errors.forEach(error => console.error(`   - ${error}`))
          continue
        }
        
        // Plugin passed both validations
        plugins.push(pluginData as MarketplacePlugin)
        
        // Log warnings if any
        if (schemaResult.warnings.length > 0) {
          validationWarnings.push(`Plugin '${dir.name}': ${schemaResult.warnings.join(', ')}`)
        }
        
        console.log(`✅ Successfully validated plugin: ${pluginData.name}`)
        
      } catch (error) {
        console.error(`❌ Failed to process plugin ${dir.name}:`, error instanceof Error ? error.message : 'Unknown error')
      }
    }
    
    // Log validation summary
    if (validationWarnings.length > 0) {
      console.warn('⚠️ Validation warnings:')
      validationWarnings.forEach(warning => console.warn(`   ${warning}`))
    }
    
    console.log(`🎉 Successfully discovered ${plugins.length} valid plugin(s)`)
    
  } catch (error) {
    console.error('❌ Failed to discover plugins:', error instanceof Error ? error.message : 'Unknown error')
  }

  return plugins
}

// Get plugins sorted by name
export async function getSortedPlugins(): Promise<MarketplacePlugin[]> {
  const plugins = await discoverPlugins()
  return plugins.sort((a, b) => a.name.localeCompare(b.name))
}

// Find plugin by ID
export async function getPluginById(id: string): Promise<MarketplacePlugin | undefined> {
  const plugins = await discoverPlugins()
  return plugins.find(plugin => plugin.id === id)
}

// Generate search index
export async function getSearchIndex() {
  const plugins = await discoverPlugins()
  return plugins.map(plugin => ({
    id: plugin.id,
    name: plugin.name,
    description: plugin.description,
    tags: plugin.tags || [],
    author: typeof plugin.author === 'object' ? plugin.author.name : plugin.author,
    searchText: `${plugin.name} ${plugin.description} ${(plugin.tags || []).join(' ')} ${typeof plugin.author === 'object' ? plugin.author.name : plugin.author}`.toLowerCase()
  }))
}

// Get plugin statistics
export async function getPluginStats() {
  const plugins = await discoverPlugins()
  return {
    total: plugins.length,
    lastUpdated: new Date().toISOString(),
    categories: plugins.reduce((acc, plugin) => {
      const category = plugin.category || 'uncategorized'
      acc[category] = (acc[category] || 0) + 1
      return acc
    }, {} as Record<string, number>)
  }
}
