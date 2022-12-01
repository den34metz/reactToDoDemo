import {React, useState} from 'react'
import '../styles/styles.scss';

function Modal(props) {

    const [cancel, setCancel] = useState(false);

    function cancelModal() {
        props.onClose();
    }

    function confirmModal() {
        props.onConfirm();
    }



  return (
    <div className="modal">
        <p>Are you sure?</p>
        <button className="btn" onClick={cancelModal}>Cancel</button>
        <button className="btn" onClick={confirmModal}>Confirm</button>
    </div>
  )
}

export default Modal