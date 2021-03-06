const userName = document.querySelector('.user-info__name');
const userJob = document.querySelector('.user-info__job'); 

class Api {
  constructor(url, token) {
    this.url = url;
    this.token = token;
  }

  getInitialCards() {
  return fetch(`${this.url}/cards`, 
  { 
   headers: {
    authorization: `${this.token}`
  }
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  })

  .catch((err)=> {
    console.log(err);
  });
  }

  dataLoading(){
    return fetch(`${this.url}/users/me`,
    {
    headers: {
      authorization: `${this.token}`
    }      
    })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })

  .catch((err)=> {
    console.log(err);
  });    
  }  
  profileEditSave(){
       return fetch(`${this.url}/users/me`,
    {
    method: 'PATCH',
    headers: {
      authorization: `${this.token}`,
      'Content-Type': 'application/json'
    },
      body: JSON.stringify({
      name: userName.textContent,
      about: userJob.textContent
      })
    })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })

  .catch((err)=> {
    console.log(err);
  });  
  }
  laiked(){
      return fetch(`${this.url}/cards`, 
  { 
   headers: {
    authorization: `${this.token}`
  }
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  })

  .catch((err)=> {
    console.log(err);
  });
  }
}



const api = new Api('https://nomoreparties.co/cohort3', '549369e6-22a5-4f49-bf55-d055fc07237e');

export default api;