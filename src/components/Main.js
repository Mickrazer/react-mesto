import React, { useState, useEffect } from 'react';
import '../index.css';
import PopupWithForm from './PopupWithForm';
import Card from './Card';
import Info from './Info';
import api from '../utils/api';


function Main (props) {

	//	стейт переменные
	const [cards, setCards]= useState([])
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);

    //функции изменения переменных

  	function handleAvatarClick() {
    	setEditAvatarPopupOpen(true);
  	}

	function handleProfileClick() {
	    setEditProfilePopupOpen(true);
	} 

	function handleAddPlaceClick() {
	    setAddPlacePopupOpen(true);
	}

	function closeAllPopup () {
	    setEditAvatarPopupOpen(false);
	    setEditProfilePopupOpen(false);
	    setAddPlacePopupOpen(false);
	}

	useEffect(() => {
		api.getInitialCards().then((result) => {
			for(let i =0; i<result.length; i++){
				cards.push({
					'name': result[i]['name'],
					'link': result[i]['link'],
					'like': result[i]['likes'].length
				})
			}
			setCards([
			...cards,
			cards		
			]) //переделать
		})
		console.log('Смонтировался блок карточек')
	}, [])


	return (
		<div className="root">
		    <div className="profile root__section">
		    	<Info onEditProfile={handleProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleAvatarClick}/>
		    </div>
	    	<div className="places-list root__section">
	    		{cards.map(({name, link, like}, index) => {
	    			return(
	    				<Card name={name} link={link} like={like}/>		
	    			);
	    		})}
	    	</div>

	    	{isEditAvatarPopupOpen} && <PopupWithForm name="avatar" title="Изменить аватар" button="Загрузить" handleClose={closeAllPopup} isOpen={isEditAvatarPopupOpen}/>
	    	{isEditProfilePopupOpen} && <PopupWithForm name="profile" title="Редактировать профиль" button="Сохранить" handleClose={closeAllPopup} isOpen={isEditProfilePopupOpen}/>
	    	{isAddPlacePopupOpen} && <PopupWithForm name="new" title="Новое место" button="+" handleClose={closeAllPopup} isOpen={isAddPlacePopupOpen }/>
	  </div>
	);
}

export default Main;