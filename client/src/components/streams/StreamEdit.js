import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm'

// データはReduxからとってくるんじゃなくって、都度APIを叩いた方がいい

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  onSubmit = (formProps) => {
    this.props.editStream(this.props.match.params.id, formProps)
  }

  render() {
    // https://reactjs.org/docs/react-component.html
    // render() -> componentDidMount()
    if(!this.props.stream) {
      return <div></div>
    }

    // initialValueを渡すときに、変更する必要のない、id,userIdがformに渡り、そのままリクエストに繋がる　
    // この段階で、不要な値は渡さないように_pick関数を使う。
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm  
          onSubmit={this.onSubmit} 
          initialValues={_.pick(this.props.stream, 'title', 'description')}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)
