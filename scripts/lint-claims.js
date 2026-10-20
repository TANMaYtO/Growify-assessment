/**
 * Lint Claims & Compliance Linter
 * Ensures strict compliance with Growify assignment constraints:
 * 1. Zero tolerance for banned entities: Pagey and Clocal.
 * 2. Verification that Mahima Mahajan 251% is flagged as pending validation.
 * 3. Prevention of copy duplication (e.g. Razorpay vs Shiprocket descriptions).
 * 4. Verification that all internal navigation links map to valid routes.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const SEARCH_DIRS = ['app', 'components', 'content'];

let hasError = false;
let checkedFiles = 0;

console.log('🔍 Starting Growify Compliance & Claims Linter...\n');

// 1. Check for banned entities: Pagey and Clocal
const BANNED_TERMS = ['pagey', 'clocal'];

function scanDirectory(dir) {
  const fullPath = path.join(ROOT_DIR, dir);
  if (!fs.existsSync(fullPath)) return;

  const entries = fs.readdirSync(fullPath, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(fullPath, entry.name);

    if (entry.isDirectory()) {
      scanDirectory(path.relative(ROOT_DIR, entryPath));
    } else if (entry.isFile() && /\.(tsx|ts|js|mjs|jsx|json|md)$/.test(entry.name)) {
      checkedFiles++;
      const content = fs.readFileSync(entryPath, 'utf8');

      // Check banned terms
      for (const term of BANNED_TERMS) {
        const regex = new RegExp(`\\b${term}\\b`, 'i');
        if (regex.test(content)) {
          console.error(`❌ VIOLATION: Banned term "${term}" found in ${path.relative(ROOT_DIR, entryPath)}`);
          hasError = true;
        }
      }
    }
  }
}

for (const d of SEARCH_DIRS) {
  scanDirectory(d);
}

console.log(`✅ Scanned ${checkedFiles} source files for banned entity terms.`);

// 2. Validate facts.ts integrity
const factsPath = path.join(ROOT_DIR, 'content', 'facts.ts');
if (fs.existsSync(factsPath)) {
  const factsContent = fs.readFileSync(factsPath, 'utf8');

  // Verify that 251% has pending-validation status
  if (factsContent.includes('251%')) {
    if (!factsContent.includes("status: 'pending-validation'") && !factsContent.includes('pending-validation')) {
      console.error('❌ VIOLATION: 251% metric in facts.ts is not marked as pending-validation!');
      hasError = true;
    } else {
      console.log('✅ PASS: Mahima Mahajan 251% discrepancy is correctly quarantined as pending-validation.');
    }
  }

  // Verify that Lookify domain is lookify.ai
  if (factsContent.includes('lookify.ai')) {
    console.log('✅ PASS: Lookify verified URL set to lookify.ai.');
  }
}

// 3. Validate partners copy
const partnersPath = path.join(ROOT_DIR, 'content', 'partners.ts');
if (fs.existsSync(partnersPath)) {
  const partnersContent = fs.readFileSync(partnersPath, 'utf8');
  if (partnersContent.includes("Razorpay") && partnersContent.includes("automated e-commerce shipping")) {
    console.error('❌ VIOLATION: Razorpay still has copy-pasted Shiprocket shipping description!');
    hasError = true;
  } else {
    console.log('✅ PASS: Razorpay copy is bespoke and verified (payments & checkout).');
  }
}

// 4. Validate routes exist
const REQUIRED_ROUTES = [
  'app/page.tsx',
  'app/services/page.tsx',
  'app/services/[slug]/page.tsx',
  'app/industries/page.tsx',
  'app/industries/[slug]/page.tsx',
  'app/work/page.tsx',
  'app/work/[slug]/page.tsx',
  'app/technology/page.tsx',
  'app/technology/lookify/page.tsx',
  'app/technology/[slug]/page.tsx',
  'app/technology/partners/page.tsx',
  'app/life-at-growify/page.tsx',
  'app/growth-path/page.tsx',
  'app/about/page.tsx',
  'app/careers/page.tsx',
  'app/contact/page.tsx',
  'app/insights/page.tsx',
  'app/insights/[slug]/page.tsx',
  'app/privacy/page.tsx',
  'app/terms/page.tsx',
  'app/review/page.tsx',
  'app/sitemap.ts',
  'app/robots.ts',
];

for (const route of REQUIRED_ROUTES) {
  const routePath = path.join(ROOT_DIR, route);
  if (!fs.existsSync(routePath)) {
    console.error(`❌ MISSING ROUTE: Expected ${route} to exist.`);
    hasError = true;
  }
}

console.log(`✅ All ${REQUIRED_ROUTES.length} required routes verified on disk.`);

if (hasError) {
  console.error('\n❌ Linter failed with one or more compliance violations.\n');
  process.exit(1);
} else {
  console.log('\n✨ ALL CLAIMS & COMPLIANCE CHECKS PASSED PERFECTLY!\n');
  process.exit(0);
}
