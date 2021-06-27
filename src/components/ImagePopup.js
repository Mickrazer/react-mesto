import React from 'react';
import '../index.css';
import buttonClose from '../images/close.svg'

function ImagePopup (props) {

	const { handleClose , isOpen, card} = props;

	return (
		isOpen && <div className="popup">
			<div className="popup__image">
				<img style={{backgroundImage: `url(${card})`}}/>
				<img src={buttonClose} className="popup__close" onClick={handleClose}/>
			</div>
		</div>
	);
}

export default ImagePopup;