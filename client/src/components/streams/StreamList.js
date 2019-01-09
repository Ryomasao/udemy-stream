import React from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams()
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera" />
          {stream.title}
          <div className="description">{stream.description}</div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          {this.renderList()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // convet object to array
  // if you deal with records...
  // in component use array
  // in store(for update delte etc) use object
  return { streams: Object.values(state.streams) }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList)
