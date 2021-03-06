import React, { PureComponent } from 'react'
import  {Form, Icon, Input, Button, Checkbox } from 'antd';
import {withFormik, FormikErrors, FormikProps} from 'formik';
import * as yup from 'yup';
import 'antd/dist/antd.css';

interface FormValues {
    email: string, 
    password: string
}


interface Props {
    submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;   
}


 class C extends PureComponent<FormikProps<FormValues> & Props> {

    handleSubmit(){


    }

    render() {

        const {values, handleChange, handleBlur, handleSubmit, touched, errors} = this.props;
        return (
            <form style={{display:'flex'}} onSubmit={handleSubmit}>
            <div style={{width: 400, margin: "auto"}} 
            onSubmit={this.handleSubmit} className="login-form">
            <Form.Item help={touched.email && errors.email ? errors.email: ''} 
           validateStatus= {touched.email && errors.email ? "error": ''}>

             
                <Input
                name="email"
                value={values.email}
                onChange={handleChange }
                onBlur={handleBlur}
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Email "
                />
            </Form.Item>
            <Form.Item help={touched.password && errors.password ? errors.password: ''}
            validateStatus={touched.password && errors.password ? "error": ''}>
             
                <Input
                name="password"
                value={values.password}
                onChange={handleChange }
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
             <Checkbox>Remember me</Checkbox>
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              </Form.Item>
              <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
               Register 
              </Button>
              
            </Form.Item> 
              <Form.Item>
              Or <a href="">login now!</a>
            </Form.Item>
          </div>
          </form>
        )
    }
}
const emailNotLongEnough = "email must be at least 3 characters";
 const passwordNotLongEnough = "password must be at least 3 characters";
 const invalidEmail = "email must be a valid email";

const registerPasswordValidation = yup
  .string()
  .min(3, passwordNotLongEnough)
  .max(255)
  .required();

const validationSchema = yup.object().shape({
    email: yup
      .string()
      .min(3, emailNotLongEnough)
      .max(255)
      .email(invalidEmail)
      .required(),
    password: registerPasswordValidation
  });
  
export const  RegisterView = withFormik<Props, FormValues>({
    validationSchema,
mapPropsToValues: () => ({
    email: '', password: ''

}),
    handleSubmit: async (values, {props, setErrors}) =>  {
        const errors = await props.submit(values); 
        if(errors){
            setErrors(errors);
        }
    }

})(C);