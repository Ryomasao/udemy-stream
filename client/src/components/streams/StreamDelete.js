import React from 'react'
import Modal from '../Modal'
import history from '../../history'

const actions = (
  <React.Fragment>
    <button className="ui negative button">Delete</button>
    <button className="ui button">Cancel</button>
  </React.Fragment>
)

const StreamDelete = () => {
  return (
    <div>
      StreamDelete
      <Modal 
        title="Delete Stream"
        content="Are you sure?"
        actions={actions}
        onDismiss={() => history.push('/')}
      />
    </div>
  )
}

export default StreamDelete
