import React from 'react'
import ReactDOM from 'react-dom'
import history from '../history'

const Modal = props => {
  // e.stopPropagation 
  // 子要素のモーダルをクリックしたときに、親要素(dimmer)のクリックイベントが発生しないようする。
  // eventのバブルアップを止める
  return ReactDOM.createPortal(
    <div 
      onClick={() => history.push('/') } 
      className="ui dimmer modals visible active"
     >
      <div 
        onClick={(e) => e.stopPropagation ()} 
        className="ui standard modal visible active"
       >
        <div className="header"> Delete Stream</div>
        <div className="content"> 
          Are you sure?
        </div>
        <div className="actions">
          <button className="ui primary button">Delete</button>
          <button className="ui button">Cancel</button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  )
}

export default Modal
