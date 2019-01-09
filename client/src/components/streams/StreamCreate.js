import React from 'react'
import { Field, reduxForm } from 'redux-form'
class StreamCreate extends React.Component {

  // input and meta is injected by redux-form
  renderInput({ input, meta, label }) {
    //console.log(formProps)
    console.log(meta)
    
    // <input onChange={formProps.input.onChange} value={formProps.input.value} />
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        <div>{meta.error}</div>
      </div>
    )
  }

  onSubmit(formProps) {
    // function this.props.handleSubmit is care about preventDefault. so you doun need it manually
    //event.preventDefault()

    console.log(formProps)
  }

  render() {
    // react-redux injects various property
    // console.log(this.props)
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title"/>
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validate = formValues => {
  const errors = {}
  if (!formValues.title) {
    errors.title = 'you must enter title'
  } 

  if (!formValues.description) {
    errors.description = 'you must enter descript'
  } 

  return errors
}

// when you pass validate Function, reduct-form is call validate function
// validate func can return error object which inculdes field name
// idk when validate function is called...
export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate)
