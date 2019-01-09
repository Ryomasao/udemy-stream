import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createStream } from '../../actions'
class StreamCreate extends React.Component {

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div> 
        </div>
      )
    }

    return null
  }

  // input and meta is injected by redux-form
  // render input use 'this'. so you take care context, yes, use arrow function
  renderInput = ({ input, meta, label }) => {
    // you can use react-form prop but {...input} is simply
    // <input onChange={formProps.input.onChange} value={formProps.input.value} />

    const className = `field ${meta.touched && meta.error ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = (formProps) => {
    // function this.props.handleSubmit is care about preventDefault. so you doun need it manually
    //event.preventDefault()

    this.props.createStream(formProps)
  }

  render() {
    // react-redux injects various property
    // console.log(this.props)
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
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

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate)

export default connect(null, { createStream })(formWrapped)

