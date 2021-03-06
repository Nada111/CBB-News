import React, { Component } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container } from 'react-bootstrap'
export default class Contact extends Component {
   state={
       data: {},
       message:''
   }
   addDataToState(data){
       this.setState({data:data,message:"Thank you for subscribing"})
   }
   render() {
       return (
           <div>
           <Formik
               initialValues={{
                   firstName: '',
                   email: '',
               }}
               validationSchema={Yup.object().shape({
                   firstName: Yup.string()
                       .required('First Name is required'),
                      
                   email: Yup.string()
                       .email('Invalid Email'),
                     
               })}
               onSubmit={fields => {
                  
                   this.addDataToState(fields)
               }}
               render={({ errors, status, touched }) => (
                  <Container>
                        <br/>
                   <br/>
                   <br/>
                  <Form>
                       <div className="form-group">
                           <label htmlFor="firstName"><h5>First Name</h5></label>
                           <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                           <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                       </div>
                       <div className="form-group">
                           <label htmlFor="email"><h5>Email</h5></label>
                           <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                           <ErrorMessage name="email" component="div" className="invalid-feedback" />
                       </div>
                
                       <div className="form-group">
                           <button type="submit" className="btn btn-primary mr-2"><h5>Subscribe</h5></button>
                           {/* <button type="reset" className="btn btn-secondary">Reset</button> */}
                       </div>
                   </Form>
                   </Container>
               )}
           />
                        <br></br>
        <h4>  {this.state.message}</h4>
        <br></br>
        <br></br>
           </div>
       )
   }
}