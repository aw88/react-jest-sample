import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';

import { TermDefinition } from '../models/Definition';
import ListView, { ListViewItem } from './ListView';

describe('<ListView />', () => {
  it('should render without error', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListView />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render definitions in a list', () => {
    const definitions = [
      new TermDefinition('definition1'),
      new TermDefinition('definition2'),
      new TermDefinition('definition3')
    ];

    const listView = shallow(<ListView definitions={definitions} />);

    expect(listView.find(ListViewItem)).toHaveLength(3);
  });

  it('should pass the clicked item to the handler', () => {
    const onSelectMock = jest.fn();
    const definitions = [
      new TermDefinition('definition1'),
      new TermDefinition('definition2'),
      new TermDefinition('definition3')
    ];

    const listView = mount(<ListView definitions={definitions} onSelect={onSelectMock} />);

    listView.find('button').first().simulate('click');

    expect(onSelectMock.mock.calls.length).toBe(1);
    expect(onSelectMock.mock.calls[0][0]).toBe(definitions[0]);
  });
});
