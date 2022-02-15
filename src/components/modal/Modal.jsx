import {useState} from 'react'
import './modal.css'

function Modal({msg}) {

    const [show, setShow] = useState(false)

    return (
        <div className={show ? "modal-container" : "modal-container show"}>
            <div className="modal-body">
                <div className="modal-head">
                    <span onClick={() => setShow(!show)}>
                        <i className="fa fa-times"></i>
                    </span>
                </div>
                <div className="modal-contents">
                    <p>{msg || '-_-'}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal
