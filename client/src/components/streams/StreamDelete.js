import React from 'react'
import Modal from '../Modal'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStream, deleteStream } from '../../actions'
import history from '../../history'

class StreamDelete extends React.Component {

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  onSubmit = () => {
    this.props.deleteStream(this.props.match.params.id)
  }

  renderContent() {
    if(!this.props.stream) {
      return 'Are you sure?'
    }

    return `Are you sure? title:${this.props.stream.title}`
  }

  renderActions() {
    return  (
      <React.Fragment>
        <button 
          onClick={this.onSubmit} 
          className="ui negative button"
         >Delete</button>
        <Link to="/" className="ui button">Cancel</Link>
      </React.Fragment>
    )
  }

  render() {
    return (
      <div>
        StreamDelete
        <Modal 
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
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

export default connect(mapStateToProps, {
  fetchStream,
  deleteStream
})(StreamDelete)
