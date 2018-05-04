import React from 'react';

export default class Subscribe extends React.Component {

  // componentDidMount() {
  //   fetch("https://api.unisender.com/ru/api/getLists?format=json&api_key=5c9twbzd8rqzg5bmupq9b87hff9tr6uf4pfg1aga").then((resp)=>{ return resp.json() }).then((json)=>{ console.log(json) });

  //   fetch("https://api.unisender.com/ru/api/exportContacts?format=json&api_key=5c9twbzd8rqzg5bmupq9b87hff9tr6uf4pfg1aga&list_id=12130797").then((resp)=>{ return resp.json() }).then((json)=>{ console.log(json) });
  // }

  onFocus(e) {
    return e.target.placeholder = '';
  }

  onBlur(e) {
    return e.target.placeholder = "Подпишитесь на нашу Рассылку";
  }

  postNewEmail() {
    var subscribe = document.getElementsByClassName('subscribe-email')[0],
        emailText = subscribe.value.trim(),
        resMsg = document.getElementsByClassName('res-msg')[0];

    fetch(`https://api.unisender.com/ru/api/subscribe?format=json&api_key=5c9twbzd8rqzg5bmupq9b87hff9tr6uf4pfg1aga&
list_ids=12130797&fields[email]=${emailText}&double_optin=3`, {method: "POST"})
    .then(function(res){ return res.json(); })
    .then(function(data){
      if(data.errors === undefined) {
        resMsg.innerHTML = 'Неверно введенные данные, попробуйте еще раз';
        resMsg.style.display = 'block';
      }else {
        resMsg.innerHTML = 'Спасибо за подписку. Будем на связи!';
        resMsg.style.display = 'block';
      }
    })
  }

  render() {
    return(
      <div>
        <div className="form-subscribe">
        <input type="email"
               name="subscribe-email"
               onFocus = {this.onFocus}
               onBlur = {this.onBlur}
               className="subscribe-email"
               placeholder="Подпишитесь на нашу Рассылку"
               required />
        <div className="subscribe-btn"
             onClick = {this.postNewEmail} />   
        </div>
        <p className="res-msg"></p> 
      </div> 
    )
  }
}
