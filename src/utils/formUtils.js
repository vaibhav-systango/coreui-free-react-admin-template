/*
 
 * formValidations

 * File containing collection of form fields used in the app
 * It also has necessary validation over these fieds

*/

import React from 'react';
import _ from 'lodash';
import '../../assets/style/style.css'
//import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import moment from 'moment'
import momentLocaliser from 'react-widgets-moment'
import 'react-widgets/dist/css/react-widgets.css'
momentLocaliser(moment)
import { DateTimePicker } from 'react-widgets'

const renderField = ({ input, label, type, placeholder,validationError, valueField,meta: { touched, error, warning } }) => {
  return(
  <div>
    
    <div> 
      <input {...input} placeholder={placeholder} type={type}  className={validationError || (touched && error) ? "form-control validationError" : "form-control"}/>
    </div>
    <div>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
    {validationError && <div>
          {(validationError && <span>{validationError}</span>)}
        </div>}
  </div>
)
}


const renderFieldValue = ({ input, label,value,type, showValue,placeholder,validationError, valueField,meta: { touched, error, warning } }) => {
  return(
  <div>
    <div> 
      <input {...input}  
             type={type}  
             className={validationError || (touched && error) ? "form-control validationError" : "form-control"}
             disabled={showValue}
             defaultValue={showValue ? " ": value}
              />
    </div>
    <div>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
    {validationError && <div>
          {(validationError && <span>{validationError}</span>)}
        </div>}
  </div>
)}



const renderAgeValue = ({ input, label,value,type, showAge,placeholder,validationError, valueField,meta: { touched, error, warning } }) => {
  return(
  <div>
    <div> 
      <input {...input}  
             type={type}  
             className={validationError || (touched && error) ? "form-control validationError" : "form-control"}
             disabled={showAge}
             defaultValue={showAge ? " ": value}
              />
    </div>
    <div>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
    {validationError && <div>
          {(validationError && <span>{validationError}</span>)}
        </div>}
  </div>
)}


const renderDateTimePicker = ({ input: { onChange, value },showCreateDate,validationError,meta: {touched, error} }) =>{
  return(<div>
          <DateTimePicker
            onChange={onChange}
            format="YYYY-MM-DD"
            time={false}
            disabled={showCreateDate}
            defaultValue={null}
            value={!value ? null : new Date(value)}
            max={new Date()}
         />
        <div>
          {touched && error && <span>{error}</span>}
        </div>
          {validationError && <div>
            {(validationError && <span>{validationError}</span>)}
        </div>}
        </div>
    )
}
  


const renderDatePicker = ({ input: { onChange, value },forDiscovery,validationError,meta: {touched, error} }) => { 
      return(<div> 
           <DateTimePicker
                  onChange={onChange}
                  format="YYYY-MM-DD"
                  time={false}
                  defaultValue={null}
                  className={validationError || (touched && error) ? "validationError" : ""}
                  value={!value ? null : new Date(value)}
                  min={new Date()}
                  max={new Date(2199,12,2)}
                />

         <div>
          {touched && error && <span>{error}</span>}
          </div>
          {validationError && <div style={{border: '1px solid red !important'}}>
            {(validationError && <span>{validationError}</span>)}
          </div>}

        </div>)
      
  }



const renderDispoDatePicker = ({ input: { onChange, value },validationError,startDate,showTime,meta: {touched, error} }) => { 
      return(<div> 
           <DateTimePicker
                  onChange={onChange}
                  format={'YYYY-MM-DD'}
                  time={false}
                  defaultValue={null}
                  value={!value ? null : new Date(value)}
                  className={validationError || (touched && error) ? "validationError" : " "}
                  max={new Date()}
                />

         <div>
          {touched && error && <span>{error}</span>}
          </div>
          {validationError && <div>
            {(validationError && <span>{validationError}</span>)}
          </div>}
        </div>)
      
  }






const renderCheckbox = ({ input, label, type, placeholder,validationError,checked,fromObject,meta: { touched, error, warning } }) => {
  return(
  <span>
    {fromObject ? 
       <input {...input} placeholder={placeholder} type={type} checked={checked}  className={validationError || (touched && error) ? "form-control validationError" : "form-control"}/>
      :
      <input {...input} placeholder={placeholder} type={type}  className={validationError || (touched && error) ? "form-control validationError" : "form-control"}/>
    }

    <div>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
    {validationError && <div>
          {(validationError && <span>{validationError}</span>)}
        </div>}
  </span>
)
}


const loginField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <div>
      <div> 
        <input {...input} placeholder={label} type={type} className="form-control"/>
      </div>      
    </div>
    <div className="error_field">
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)


const renderSelectField = ({ input, label, validationError,showAge, type, meta: { touched, error }, children }) => (
    <span>
    <div>
      <select 
      placeholder="Search"
      {...input} 
      className={validationError || (touched && error) ? "form-control validationError" : "form-control"}
      disabled={showAge ? showAge : false}
      >
        {children}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
    {validationError && <div>
          {(validationError && <span>{validationError}</span>)}
        </div>}
    </span> 
)


const renderSelectEntity = ({ input, label, validationError,objects, type, meta: { touched, error }, children }) => (
    <span>
    <div>
      <select {...input} className={validationError || (touched && error) ? "form-control validationError" : "form-control"}>
        {children}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
    {validationError && <div>
          {(validationError && <span>{validationError}</span>)}
        </div>}
    </span> 
)

// objects
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const required = value => value ? undefined : 'Required'

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined


const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined

const minValue = min => value => value && value < min ? `Must be at least ${min}` : undefined

const maxValue = max => value => value && value > max ? `Must be at least ${max}` : undefined

const email = (value) => EMAIL_REGEX.test(value) ? undefined : 'Email is invalid';

const mustMatch = (field, fieldName, compareFieldName) => (value, allValues) => {
  const data = allValues.toJS();
  return !_.isEmpty(data) && data[field] === value ? undefined : 'Fields Must Match';
};

const errorToFields = (data = {}) => {
  const errors = {};
  if (data) {
    _.forEach(data.errors, (error) => {
      const key = error.source.pointer.replace('/data/attributes/', '');
      const fieldName = _.upperFirst(key.replace('_', ' '));
      errors[key] = `${fieldName} ${error.detail}`;
    });
  }

  return errors;
};

export {
  errorToFields,
  maxValue,
  maxLength,
  minValue,
  number,
  required,
  email,
  mustMatch,
  renderField,
  renderFieldValue,
  renderAgeValue,
  loginField,
  renderSelectField,
  renderSelectEntity,
  renderCheckbox,
  renderDateTimePicker,
  renderDatePicker,
  renderDispoDatePicker
};