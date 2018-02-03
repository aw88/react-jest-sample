import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './DetailView.css';

const DetailView = ({ definition }) => (
  <div className="DetailView">
    <h3>Detail View</h3>

    { definition ? (
      <div className="DefinitionDetail">
        <h4>{definition.title}</h4>
        <h5>Includes terms:</h5>
        <ul className="TermList IncludedTerms">
          { Array.from(definition.includedTerms).map(t =>
            <li className="IncludedTerm" key={t}>{t}</li>) }
        </ul>

        <h5>Excludes terms:</h5>
        <ul className="TermList ExcludedTerms">
          { Array.from(definition.excludedTerms).map(t =>
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

DetailView.propTypes = {
  definition: PropTypes.shape({
    title: PropTypes.string,
    includedTerms: PropTypes.object,
    excludedTerms: PropTypes.object
  }),
};

export default DetailView;
