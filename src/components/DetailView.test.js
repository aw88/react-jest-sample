import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { TermDefinition } from '../models/Definition';
import DetailView from './DetailView';

it('should render without error', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DetailView />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render an empty definition detail', () => {
  const detailView = shallow(<DetailView />);

  expect(detailView.find('.DefinitionDetailEmpty').text()).toEqual('Select a definition');
});

it('should render a definition\'s details', () => {
  const includedTerms = ['term1', 'term2'];
  const excludedTerms = ['term3', 'term4', 'term5'];
  const definition = new TermDefinition('Term Definition Title', includedTerms, excludedTerms);

  const detailView = shallow(<DetailView definition={definition} />);
  const definitionTitle = detailView.find('.DefinitionDetail h4').text();
  const includedTermNodes = detailView.find('.IncludedTerm');
  const excludedTermNodes = detailView.find('.ExcludedTerm');

  expect(definitionTitle).toEqual('Term Definition Title');

  expect(includedTermNodes).toHaveLength(2);
  includedTermNodes.forEach(node => {
    expect(includedTerms).toContain(node.text());
  });

  expect(excludedTermNodes).toHaveLength(3);
  excludedTermNodes.forEach(node => {
    expect(excludedTerms).toContain(node.text());
  });
});
