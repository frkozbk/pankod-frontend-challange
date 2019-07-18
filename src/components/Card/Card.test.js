import React from 'react';
import {shallow,configure}from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Card from './Card'
import { wrap } from 'module';
configure({adapter:new Adapter()})

describe('<Card/>',() => {
    const wrapper = shallow(<Card/>,{context:{},disableLifecycleMethods:true})
    it('should render Series', () => {
        expect(wrapper.find('div.card')).toHaveLength(1)
    })
    it('Should display the title',() => {
        wrapper.setProps({title:'test'});
        expect(wrapper.find('p').text()).toBe('test')
    })
})