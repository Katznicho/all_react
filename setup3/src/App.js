
import './App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button, Box , FormControl} from '@material-ui/core';
import * as Yup from 'yup'
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

import React, {useState} from 'react'

function App() {
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword:""
  }
  const SignUpSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "name is too short")
      .required("Firstname is required"),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(
        /^(([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9]))$/,
        "phone number should be exactly ten characters long"
      ),
  
    email: Yup.string().email().required("Email is required"),
  
    password: Yup.string()
      .required("Password is required")
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/, 'password should contain both uppercase and lowercase letters')
      .min(5, "Password should 6 characters long "),
    confirmPassword:Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')

  });
  const submitValues = (values) => {
    console.log(values)
  }
  const [passwordType, setPasswordType] = useState(true)
  const changeVisibility = () => {
    alert('am changing')
    passwordType === 'password'?setPasswordType('text'):setPasswordType('password')
  }
  return (
    <div className="app">
      This is a form
      <Formik
        validationSchema={SignUpSchema}
        initialValues={initialValues}
        onSubmit = {(values)=>submitValues(values)}
      >
        {
          ({ errors, touched }) => (
            <Box>
            <Form className="app__form">
                <FormControl>
                  <Field name="name"
                  as={TextField}
                  variant= {!errors.name&&touched.name?"filled" :"outlined"}
                  error={errors.name && touched.name}
                  placeholder="enter fullname"
                  label="FullName" />
                {errors.name && touched.name &&
                  <ErrorMessage name="name" component="span" className="error" />}
                </FormControl>
                <FormControl>
                  <Field
                  name="email"
                  type="email"
                  as={TextField}
                  variant= {!errors.email&&touched.email?"filled":"outlined"}
                  error={errors.email && touched.email}
                  label="Email"
                  placeholder="enter email" />
                  {errors.email && touched.email &&
                    <ErrorMessage name="email" component="span" className="error" />}
                </FormControl>
                <FormControl>
                  <Field
                  name="phoneNumber"
                  as={TextField}
                    label="PhoneNumber"
                  variant= {!errors.phoneNumber && touched.phoneNumber?"filled":"outlined"}
                  error = {errors.phoneNumber&&touched.phoneNumber}
                  placeholder="enter phone number" />
                  {errors.phoneNumber && touched.phoneNumber &&
                    <ErrorMessage name="phoneNumber" component="span" className="error" />}
                </FormControl>
                <FormControl>
                  <Field
                  name="password"
                  as={TextField}
                    label="Password"
                    type={passwordType?"password":"text"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={()=>setPasswordType(!passwordType)}
                          >
                            {passwordType? <VisibilityOff /> :<Visibility/>
                          }
                          </IconButton>
                          
                        </InputAdornment>
                      ),
                    }}
                  variant= {!errors.password && touched.password ?"filled":"outlined"}
                  error={errors.password && touched.password}
                  placeholder="enter password" />
                  {errors.password && touched.password &&
                    <ErrorMessage name="password" component="span" className="error" />}
             </FormControl>
                <FormControl>
                  <Field 
                    name="confirmPassword"
                    type="password"
                  as={TextField}
                  variant= {!errors.confirmPassword && touched.confirmPassword?"filled":"outlined"}
                  error={errors.confirmPassword&&touched.confirmPassword}
                  label= "confirmPassword"
                  placeholder="confirm password" />
                  {errors.confirmPassword && touched.confirmPassword &&
                  <ErrorMessage name="confirmPassword" component="span" className="error" />}
                </FormControl>
                <FormControl>
                <Button
                type="submit"
                variant="contained"
                color="primary">Register</Button>  
  
                </FormControl>
              
          </Form>)
            </Box>)
        }

      </Formik>
    </div>
  );
}

export default App;
