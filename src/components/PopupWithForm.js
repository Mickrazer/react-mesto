import React from 'react';
import '../index.css';
import buttonClose from '../images/close.svg'

function PopupWithForm(props) {

	const { handleClose , isOpen, name} = props;


	const body = isOpen && <div className="popup"><div className="popup__content">
				<img src={buttonClose} alt="" className="popup__close" onClick={handleClose}/>
				<h3 className="popup__title">{props.title}</h3>
				<form className="popup__form" name={props.name}>
				    <input type="text" name="name" className="popup__input popup__input_type_name" placeholder="Название" />
				    <input type="text" name="link" className="popup__input popup__input_type_link-url" placeholder="Ссылка на картинку" />
				    <button type className="button popup__button">{props.button}</button>
				</form>
			</div>
			</div>
	return(
		<div>
			{body}
	    </div>
	)
}


export default PopupWithForm;