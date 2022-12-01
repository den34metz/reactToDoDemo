import {React, useState} from 'react';
import '../styles/styles.scss';
import Modal from './Modal';
import Backdrop from './Backdrop';

export default function Todo(props) {

    const [showModal, setShowModal] = useState(false);

    function deleteModalHandler() {
        setShowModal(true);
    }

    function closeModalHandler() {
        setShowModal(false);
    }

  return (
    <div className="card">
        <h2>{props.text}</h2>
        <div className="btn_container">
            <button className="btn" onClick={deleteModalHandler}>Delete</button>
        </div>

        {showModal ? <Modal onClose={closeModalHandler} onConfirm={closeModalHandler} /> : null}
        {showModal ? <Backdrop onClick={closeModalHandler}/> : null}
    </div>
  )
}
