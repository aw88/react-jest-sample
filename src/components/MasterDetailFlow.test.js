import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';

import DetailView from './DetailView';
import ListView from './ListView';
import MasterDetailFlow from './MasterDetailFlow';

it('should render without error', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MasterDetailFlow />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render a list and detail view', () => {
  const masterDetail = shallow(<MasterDetailFlow />);

  expect(masterDetail.find(DetailView)).toHaveLength(1);
  expect(masterDetail.find(ListView)).toHaveLength(1);
});

it('should pass definitions to the list view', () => {
  const masterDetail = shallow(<MasterDetailFlow />);

  const listView = masterDetail.find(ListView);

  expect(listView.prop('definitions')).toHaveLength(4);
});

it('should open the clicked definition\'s details', () => {
  const masterDetail = mount(<MasterDetailFlow />);

  // <DetailView /> should have no definition
  expect(masterDetail.find(DetailView).prop('definition')).toBeNull();
  
  // Click on the first item in the list
  masterDetail.find(ListView).find('button').first().simulate('click');

  // Re-render <MasterDetailFlow /> with updated state
  masterDetail.update();

  // Clicked definition should show in detail view
  expect(masterDetail.find(DetailView).prop('definition').title).toEqual('First definition');
});