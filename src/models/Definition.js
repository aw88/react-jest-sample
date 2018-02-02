function isIterable(obj) {
  return obj != null && (typeof obj[Symbol.iterator] === 'function');
}

function setFromIterable(obj) {
  return isIterable(obj) ? new Set(obj) : new Set();
}

export class TermDefinition {
  constructor(title, includedTerms, excludedTerms) {
    this.title = title;
    this.includedTerms = setFromIterable(includedTerms);
    this.excludedTerms = setFromIterable(excludedTerms);
  }
}
