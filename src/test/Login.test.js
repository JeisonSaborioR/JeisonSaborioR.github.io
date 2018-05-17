import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from '../../src/views/Login';
import LocalStorageMock from './mocks/LocalStorage';
import { HashRouter } from 'react-router-dom';

global.localStorage = new LocalStorageMock;
Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const enzymeWrapper = mount(<HashRouter><Login/></HashRouter>)
  return {
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Login', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()
      expect(enzymeWrapper.find('Container').hasClass('login')).toBe(true)
    })
    it('should call save info in local storage', ()=>{
        const { enzymeWrapper } = setup()
        const form = enzymeWrapper.find('form')
        form.simulate('submit')
        expect(global.localStorage.getItem("user")).toBe("true")
    })
  })
})