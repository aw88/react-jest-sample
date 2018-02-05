import * as Actions from '../actions';
import { TermDefinition } from '../models/Definition';

const definitions = (state = [], action) => {
  console.log(state);
  console.log(action);

  switch(action.type) {
    case Actions.ADD_DEFINITION:
      return [
        ...state,
        new TermDefinition(state.length + 1, 'New Definition', [], []),
      ];

    case Actions.REMOVE_DEFINITION:
      return state
        .filter(d => d.id !== action.id)
        .map(d => new TermDefinition(d.id, d.title, d.includedTerms, d.excludedTerms));

    default:
      return state;
  }
}

export default definitions;