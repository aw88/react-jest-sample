import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListView extends Component {
  constructor() {
    super();

    this.onItemClicked = this.onItemClicked.bind(this);
  }

  onItemClicked(item) {
    return () => { this.props.onSelect(item); };
  }

  render() {
    const definitions = this.props.definitions;

    return (
      <div className="ListView">
        <h3>List View</h3>
        {definitions.map(d => (
          <div key={d.title} className="ListViewItem">
            <h4 onClick={this.onItemClicked(d)}>{d.title}</h4>
          </div>
        ))}
      </div>
    );
  }
}

ListView.propTypes = {
  onSelect: PropTypes.func,
  definitions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string
    })
  )
};

export default ListView;
