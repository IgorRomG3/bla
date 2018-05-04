import React from 'react';

export default class Subscribe extends React.Component {

  componentDidMount() {
    fetch("https://api.unisender.com/ru/api/getLists?format=json&api_key=5c9twbzd8rqzg5bmupq9b87hff9tr6uf4pfg1aga").then((resp)=>{ return resp.json() }).then((json)=>{ console.log(json) });
  }

  onFocus(e) {
    return e.target.placeholder = '';
  }

  onBlur(e) {
    return e.target.placeholder = "Подпишитесь на нашу Рассылку";
  }

  postNewEmail() {
    var subscribe = document.getElementsByClassName('subscribe-email')[0],
        emailText = subscribe.value.trim();

    fetch(`https://api.unisender.com/ru/api/subscribe?format=json&api_key=5c9twbzd8rqzg5bmupq9b87hff9tr6uf4pfg1aga&list_ids=12130797&fields[email]=${emailText}&double_optin=0`, {method: "POST"})
    .then(function(res){ return res.json(); })
    .then(function(data){ console.log( JSON.stringify( data ) ) })
  }

  render() {
    return(
      <form className="form-subscribe">
        <input type="email"
               name="subscribe-email"
               onFocus = {this.onFocus}
               onBlur = {this.onBlur}
               className="subscribe-email"
               placeholder="Подпишитесь на нашу Рассылку"
               required />
        <input type="submit"
               className="subscribe-btn"
               onClick = {this.postNewEmail}
               value="" />
      </form>
    )
  }
}
