jest.unmock('../LoadingButton');

import React from 'react';
import { shallow } from 'enzyme';

describe('LoadingButton', () => {
  it('should work', () => {
    const LoadingButton = require('../LoadingButton');
    const wrapper = shallow(
      <LoadingButton />
    );
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div').text()).toContain('Hay.');
  });

  it('should render all the card components', () => {
    const LoadingButton = require('../LoadingButton');
    const wrapper = shallow(
      <LoadingButton text="It works!" />
    );

    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('div').text()).toContain('It works!');
  });
});
