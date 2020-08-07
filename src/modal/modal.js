import React, {Component} from 'react';
import './modal.css';
import Backdrop from './backdrop/backdrop';

const Modal = props => {
    return (
        <div>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div 
                className="Modal"
                style={{
                transform:props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity : props.show ? 1 : 0
            }}>
                <header className="modal-Header">
                    <div className="close">
                        <img src="https://image.flaticon.com/icons/svg/753/753345.svg" alt="Close Button" onClick={props.modalClosed}/>
                    </div>
                </header>
                <div>
                    {props.children}
                </div>
                <footer className="modal-Footer">
                    <div className="okay">
                        <img src="https://image.flaticon.com/icons/svg/3248/3248235.svg" alt="Okay Button" />
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Modal;