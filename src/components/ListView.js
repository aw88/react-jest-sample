import React from 'react';
import PropTypes from 'prop-types';

import './ListView.css';

export const ListViewItem = ({ definition, onItemClicked, selected }) => {
  const activeClass = selected ? ' Selected' : '';
  
  return (
    <div className={ 'ListViewItem' + activeClass }>
      <button onClick={onItemClicked}>
        {definition.title}
      </button>
    </div>
  );
}

ListViewItem.propTypes = {
  definition: PropTypes.shape({
    title: PropTypes.string
  }),
  onItemClicked: PropTypes.func,
  selected: PropTypes.bool
}

export const ListView = ({ definitions, onSelect, selectedDefinition }) => (
  <div className="ListView">
    <h3>List View</h3>
    {definitions.map(d =>
      <ListViewItem
        key={d.id}
        definition={d}
        onItemClicked={() => onSelect(d)}
        selected={d === selectedDefinition} />)}
  </div>
);

ListView.propTypes = {
  onSelect: PropTypes.func,
  definitions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string
    })
  ),
  selectedDefinition: PropTypes.object
};

ListView.defaultProps = {
  definitions: [],
  onSelect: () => {}
};

export default ListView;
