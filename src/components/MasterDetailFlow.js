import React, { Component } from 'react';
import ListView from './ListView';
import DetailView from './DetailView';
import { TermDefinition } from '../models/Definition';

import './MasterDetailFlow.css';

const definitions = [
  new TermDefinition('First definition', ['term1', 'term2'], ['term3']),
  new TermDefinition('Second definition', ['term2'], []),
  new TermDefinition('Third definition', ['term3'], ['term2']),
  new TermDefinition('Fourth definition', ['term1', 'term2', 'term4'], ['term3', 'term5']),
];

class MasterDetailFlow extends Component {
  constructor() {
    super();

    this.state = {
      selectedDefinition: null,
    };

    this.onListItemSelected = this.onListItemSelected.bind(this);
  }

  onListItemSelected(item) {
    const newState = Object.assign({}, this.state, {
      selectedDefinition: item,
    });

    this.setState(newState);
  }

  render() {
    const selectedDefinition = this.state.selectedDefinition ? this.state.selectedDefinition.title : null;

    return (
      <div className="MasterDetailFlow">
        <h2>Master Detail Flow</h2>
        
        <ListView definitions={definitions} onSelect={this.onListItemSelected} selectedDefinition={this.state.selectedDefinition} />
        <DetailView definition={this.state.selectedDefinition} />
        
        <div className="DebugInfo">
          <pre>selectedDefinition: {String(selectedDefinition)}</pre>
        </div>
      </div>
    );
  }
}

export default MasterDetailFlow;
