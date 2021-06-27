import React from 'react';
import './pages/index.css';
import logo from './images/logo.svg'

function App() {
  return (
  <div className="root">
    <header className="header root__section">
      <img src={logo} alt="mesto logo" className="logo" />
    </header>
    <div className="profile root__section">
      <div className="user-info">
        <div className="user-info__photo"></div>
        <div className="user-info__data">
          <h1 className="user-info__name"></h1>
          <p className="user-info__job"></p>
          <button className="button edit__button">Edit</button>       
        </div>
        <button className="button user-info__button">+</button>
      </div>
    </div>
    <div className="places-list root__section">

    </div>
    <div className="popup">
      <div className="popup__content">
        <img src="./images/close.svg" alt="" className="popup__close" />
        <h3 className="popup__title">Новое место</h3>
        <form className="popup__form" name="new">
            <input type="text" name="name" className="popup__input popup__input_type_name" placeholder="Название" />

            <input type="text" name="link" className="popup__input popup__input_type_link-url" placeholder="Ссылка на картинку" />

            <button type className="button popup__button">+</button>
        </form>
      </div>
    </div>

   <div className="popup" id = "editPopup">
      <div className="popup__content">
        <img src="./images/close.svg" alt="" className="popup__close" id = "editClose" />
        <h3 className="popup__title">Редактировать профиль</h3>
        <form className="popup__form" id = 'popup__form_edit' name="editForm">
            <input id='name' type="text" name="name" className="popup__input popup__input_type_name" placeholder="Имя" />

            <span id = 'error-name'  className="error-message"></span>

            <input id='info' type="text" name="info" className="popup__input popup__input_type_link-url" placeholder="О себе" />

            <span id = 'error-info' className="error-message"></span>

            <button type className="button popup__button" id="changeProfileButton">Сохранить</button>
        </form>
      </div>
    </div>
  </div>  
  );
}

export default App;
