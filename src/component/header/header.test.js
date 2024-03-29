import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../utils';
import Header from './index';

const setUp =  (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
}

describe('Header Component', () => {
    
    let component;

    // run before every single test
    beforeEach(() => {
        component = setUp();
    })

    it('should render without errors', () => {
        const wrapper = findByTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('should render a logo', () => {
        const wrapper = findByTestAttr(component, 'logoImg');
        expect(wrapper.length).toBe(1);
    })

});