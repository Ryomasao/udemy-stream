import React from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'

// データはReduxからとってくるんじゃなくって、都度APIを叩いた方がいい

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  render() {
    // https://reactjs.org/docs/react-component.html
    // render() -> componentDidMount()
    if(!this.props.stream) {
      return <div></div>
    }

    return  <div>{this.props.stream.title}</div>
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchStream })(StreamEdit)
