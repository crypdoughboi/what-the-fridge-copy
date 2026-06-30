// Validate every meal template (curated + expansion) and report problems and
// duplicates. Run with: npm run validate:meals
import { loadSeedTemplates, loadExpansionTemplates, validateTemplate, templateKey } from './lib/mealTemplates.mjs';

const seed = loadSeedTemplates();
const expansion = loadExpansionTemplates();
const all = [...seed, ...expansion];

console.log(`Curated templates:   ${seed.length}`);
console.log(`Expansion templates: ${expansion.length}`);
console.log(`Total:               ${all.length}\n`);

let problems = 0;
const seenKeys = new Map();
const seenSlugs = new Set();

for (const template of all) {
  const errors = validateTemplate(template);
  // Cross-template duplicate detection.
  const slug = (template.slug ?? '').toLowerCase();
  if (seenSlugs.has(slug)) errors.push(`duplicate slug across library: ${slug}`);
  seenSlugs.add(slug);
  const key = templateKey(template);
  if (seenKeys.has(key)) errors.push(`duplicate of "${seenKeys.get(key)}" (same slug + core ingredients)`);
  else seenKeys.set(key, template.slug);

  if (errors.length) {
    problems += 1;
    console.log(`FAIL ${template.slug ?? '(no slug)'}`);
    for (const error of errors) console.log(`     - ${error}`);
  }
}

if (problems === 0) {
  console.log('All templates valid, no duplicates.');
} else {
  console.log(`\n${problems} template(s) had problems.`);
  process.exit(1);
}
