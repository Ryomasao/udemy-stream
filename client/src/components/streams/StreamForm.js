import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamForm extends React.Component {

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

  renderInput = ({ input, meta, label}) => {
    const className = `field ${meta.touched && meta.error ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = formProps => {
    this.props.onSubmit(formProps)
  }

  // 親コンポーネントにinitialValuesを設定しとくと、
  // reudx-formがマウントする際に？initalValuesのオブジェクトをもとにFieldの値を設定してくれる。　
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter Title" />
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

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm)



