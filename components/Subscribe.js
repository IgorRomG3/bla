import React from 'react';

export default class Subscribe extends React.Component {

  onFocus(e) {
    return e.target.placeholder = '';
  }

  onBlur(e) {
    return e.target.placeholder = "Подпишитесь на нашу Рассылку";
  }

  getLists() {
    console.log('bla');
  }

  render() {
    return(
      <form className="form-subscribe">
        <input type="email"
               name="subscribe-email"
               onFocus = {this.onFocus}
               onBlur = {this.onBlur}
               className="subscribe-email"
               placeholder="Подпишитесь на нашу Рассылку" />
        <button className="subscribe-btn"
                onClick = {this.getLists}></button>
      </form>
    )
  }
}
