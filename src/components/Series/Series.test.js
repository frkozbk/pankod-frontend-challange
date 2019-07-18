import React from 'react';
import {shallow,configure}from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Series} from './Series'
configure({adapter:new Adapter()})

describe('<Series/> \n',() => {
    const wrapper = shallow(<Series/>,{context:{},disableLifecycleMethods:true})
    it('should render Series', () => {
        expect(wrapper.find('.series')).toHaveLength(1);
        expect(wrapper.find('.sort')).toHaveLength(1);
    })
    it('state must change when options selected',() => {
        const select=wrapper.find('select')
        select.simulate('change',{target:{value:'SORT_BY_YEAR_DESC'}})
        expect(wrapper.instance().state.selected).toBe('SORT_BY_YEAR_DESC')
    })
})