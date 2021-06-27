import React, { useState, useEffect } from 'react';

import '../index.css';
import api from '../utils/api';


function Info(props) {

	const {onEditProfile, onAddPlace, onEditAvatar} = props;
	const [userAvatar, setUserAvatar] = useState('')
	const [userName, setUserName] = useState('')
	const [userAbout, setUserAbout] = useState('')

	useEffect(() => {
		api.dataLoading().then((result) => {
			setUserName(result.name);
			setUserAvatar(result.avatar);
			setUserAbout(result.about);
		});

	}, [])

	return (
		<div className="user-info">
		    <button className="user-info_avatar-btn" onClick={onEditAvatar}>
		    	<div className="user-info__photo" style={{backgroundImage: `url(${userAvatar})`}}>
		    	</div>
		    </button>
		   	<div className="user-info__data">
		        <h1 className="user-info__name">{userName}</h1>
		        <p className="user-info__job">{userAbout}</p>
		        <button className="button edit__button" onClick={onEditProfile}>Edit</button>       
		    </div>
		    <button className="button user-info__button" onClick={onAddPlace}>+</button>
		</div>

	);
}

export default Info;