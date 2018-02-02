import { TermDefinition } from './Definition';

it('is instantiated with empty Sets', () => {
  let definition = new TermDefinition('Definition title');

  expect(definition.title).toBe('Definition title');
  expect(definition.includedTerms.size).toBe(0);
  expect(definition.excludedTerms.size).toBe(0);
});

it('is instantiated with included terms', () => {
  const includedTerms = ['term1', 'term2', 'term3'];
  const definition = new TermDefinition('Title', includedTerms);

  expect(definition.title).toBe('Title');
  expect(definition.includedTerms.size).toBe(3);
  expect(definition.excludedTerms.size).toBe(0);

  for (let term of includedTerms)
    expect(definition.includedTerms).toContain(term);
});

it('is instantiated with excluded terms', () => {
  const excludedTerms = ['term1', 'term2', 'term3'];
  const definition = new TermDefinition('Title', [], excludedTerms);

  expect(definition.title).toBe('Title');
  expect(definition.includedTerms.size).toBe(0);
  expect(definition.excludedTerms.size).toBe(3);

  for (let term of excludedTerms)
    expect(definition.excludedTerms).toContain(term);
});

it('is instantiated with unique terms', () => {
  const includedTerms = ['term1', 'term2', 'term2', 'term1'];
  const definition = new TermDefinition('Title', includedTerms);

  expect(definition.title).toBe('Title');
  expect(definition.includedTerms.size).toBe(2);
});