#!/usr/bin/env node

/**
 * Verify package.json has required fields for NPM publishing
 */

const fs = require('node:fs');
const path = require('node:path');

try {
  const packagePath = path.join(process.cwd(), 'package.json');
  const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

  if (!pkg.name) {
    throw new Error('Missing package name');
  }

  if (!pkg.version) {
    throw new Error('Missing package version');
  }

  if (!pkg.main && !pkg.exports) {
    console.warn('⚠️  Warning: No main entry point defined');
  }

  console.log('✅ Package configuration looks good');
  console.log(`   Name: ${pkg.name}`);
  console.log(`   Version: ${pkg.version}`);
  
  if (pkg.main) {
    console.log(`   Main: ${pkg.main}`);
  }
  
  if (pkg.exports) {
    console.log(`   Exports: defined`);
  }

} catch (error) {
  console.error('❌ Package verification failed:', error.message);
  process.exit(1);
}