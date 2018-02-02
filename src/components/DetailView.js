import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DetailView extends Component {
  render() {
    return (
      <div className="DetailView">
        <h3>Detail View</h3>

        { this.props.definition ? (
          <div className="DefinitionDetail">
            <h4>{this.props.definition.title}</h4>
            <strong>Includes terms:</strong>
            <ul>
              { Array.from(this.props.definition.includedTerms).map(t =>
                <li className="IncludedTerm" key={t}>{t}</li>) }
            </ul>

            <strong>Excludes terms:</strong>
            <ul>
              { Array.from(this.props.definition.excludedTerms).map(t =>
                <li className="ExcludedTerm" key={t}>{t}</li>) }
            </ul>
          </div>
        ) : (
          <div className="DefinitionDetailEmpty">
            <h4>Select a definition</h4>
          </div>
        ) }
      </div>
    );
  }
}

DetailView.propTypes = {
  definition: PropTypes.shape({
    title: PropTypes.string,
    includedTerms: PropTypes.arrayOf(PropTypes.string),
    excludedTerms: PropTypes.arrayOf(PropTypes.string)
  }),
};

export default DetailView;