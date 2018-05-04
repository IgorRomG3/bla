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

  getLists() {
    var subscribe = document.getElementsByClassName('subscribe-email')[0];

    console.log(subscribe.trim());
  }

  render() {
    return(
      <div className="form-subscribe">
        <input type="email"
               name="subscribe-email"
               onFocus = {this.onFocus}
               onBlur = {this.onBlur}
               className="subscribe-email"
               placeholder="Подпишитесь на нашу Рассылку" />
        <div className="subscribe-btn"
                onClick = {this.getLists}></div>
      </div>
    )
  }
}
