import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ListViewItem = ({ definition, onItemClicked }) => (
  <div className="ListViewItem">
    <h4 onClick={onItemClicked}>
      {definition.title}
    </h4>
  </div>
);

const ListView = ({ definitions, onSelect }) => (
  <div className="ListView">
    <h3>List View</h3>
    {definitions.map(d =>
      <ListViewItem
        key={d.title}
        definition={d}
        onItemClicked={() => onSelect(d)} />)}
  </div>
);

ListView.propTypes = {
  onSelect: PropTypes.func,
  definitions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string
    })
  )
};

export default ListView;
