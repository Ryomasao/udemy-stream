import React from 'react'
import { Field, reduxForm } from 'redux-form'
class StreamCreate extends React.Component {

  // input is injected by redux-form
  renderInput({ input, label }) {
    //console.log(formProps)
    // <input onChange={formProps.input.onChange} value={formProps.input.value} />
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    )
  }

  render() {
    console.log(this.props)
    return (
      <form className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title"/>
        <Field name="description" component={this.renderInput} label="Enter Description" />
      </form>
    )
  }
}

//export default StreamCreate
export default reduxForm({
  form: 'streamCreate'
})(StreamCreate)
