import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';

import { findByTestAttr, checkProps } from '../../../utils';

const setUp = (props={}) => {
    const component = shallow(<Headline {...props} />);
    return component;
};


describe('Headline Component', () => {

    describe('Have props', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            };
            wrapper = setUp(props);
        });

        it('should render without errors', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        });

        it('should render a h1', () => {
            const h1 = findByTestAttr(wrapper, 'header');
            expect(h1.length).toBe(1);
        });

        it('should render a h1 desc', () => {
            const h1 = findByTestAttr(wrapper, 'desc');
            expect(h1.length).toBe(1);
        });
    });

    describe('Have NO props', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });

        it('should not render', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(0);
        });
    });

    describe('Check PropTypes', () => {

        it('should not throw a warning', () => {
            const expectedProps = {
                header: 'Test Header',
                desc: 'Test Description',
                tempArr: [{
                    fName: 'Test fName',
                    lName: 'Test lName',
                    email: 'test@gmail.com',
                    age: 22,
                    onlineStatus: false
                }]
            };
            const propsErr = checkProps(Headline, expectedProps)
            expect(propsErr).toBeUndefined();
        });
    })
})