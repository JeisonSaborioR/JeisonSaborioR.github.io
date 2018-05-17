import React from 'react';
import Enzyme, {mount,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DynamicFormInput from '../components/DynamicFormInput';

Enzyme.configure({ adapter: new Adapter()});


describe('Dynamic form Input', () => {
    let handleSubmit, pristine, reset, submitting,touched,error 
	beforeEach(() => {
        submitting = false
        pristine = false
		touched = falsepristine
		reset = sinon.spy()
		handleSubmit = fn => fn
    })
    const props = {
        submitting: submitting,
        // The real redux form has many properties for each field,
        // including onChange and onBlur handlers. We only need to provide
        // the ones that will change the rendered output.
        fields: {
            firstName: {
                value: '',
                touched: touched,
                error: error
            }
        },
        handleSubmit,
        reset
    }
    let validator=[
              { 
                name:"max", 
                value:10, 
                message:"Cantidad máxima 10 unidades" 
              }, 
              { 
                name:"min", 
                value:2, 
                message:"Cantidad mínima 2 unidades" 
              }, 
              {
                name:"required",
                value:true,
                message:"Requerido"
              }
            ]

    const component = shallow(<DynamicFormInput {...props}/>);
    console.log(component)
    //expect(handleRequired(validator)).toBe(false);
})

// test('DynamicFormInput', () => {
//     const component = mount(<DynamicFormInput/>);
//     console.log(component)
// }) 

// describe('Header', () => {
//     it('link click', () => {
//        window.alert = jest.fn()
//        const output = shallow(<NavLink href="#/profile"><i className="fa icon-user fa-2x titleColor"></i></NavLink>)
//        output.simulate('click');
//        expect(window.alert).toHaveBeenCalledWith('clicked');
//     })
    
// })
