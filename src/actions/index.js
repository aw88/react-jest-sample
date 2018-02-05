export const ADD_DEFINITION = 'ADD_DEFINITION';
export const REMOVE_DEFINITION = 'REMOVE_DEFINITION';
export const UPDATE_DEFINITION = 'UPDATE_DEFINITION';

export const addDefinition = () => ({
  type: ADD_DEFINITION,
});

export const updateDefinition = (id, newState) => ({
  type: UPDATE_DEFINITION,
  id,
  newState,
});

export const removeDefinition = (id) => ({
  type: REMOVE_DEFINITION,
  id,
});
