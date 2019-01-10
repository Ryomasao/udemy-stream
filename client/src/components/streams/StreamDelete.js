import React from 'react'
import Modal from '../Modal'

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
      />
    </div>
  )
}

export default StreamDelete
