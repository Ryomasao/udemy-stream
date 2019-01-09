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

//export default StreamCreate
export default reduxForm({
  form: 'streamCreate'
})(StreamCreate)
