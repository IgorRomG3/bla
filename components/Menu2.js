import React from 'react';
import {TweenLite, Expo} from 'gsap';
import $ from 'jquery';

export default class Menu extends React.Component {

  componentDidMount() {
    var body = document.body;
    body.classList ? body.classList.add('withJs') : body.className += ' withJs';

   $(window).scroll(function() {
        var menu = $('.top_wr');
        var logo = $('.logo');
        logo.css('fill','#fff');
        var conPos = $('.content-fake-bg').position().top;
        var menuPos = $('.top_wr').offset().top;
        var hiddenMenu = $('.nav').position().top+$('.top_wr').height();
        var navPos = $('.form-subscribe').offset().top - 80;
        var nav = $('.nav');
        var content = $('.content-fake-bg');
        var subscribe = $('.content .subscribe');
        // var subscribePos = $('.content .subscribe').before().position().top;
        
        if($(this).scrollTop()>menu.height()){
            menu.addClass('scroll');
        }else{
            menu.removeClass('scroll');
        }

        if($(this).scrollTop()> conPos){
            menu.addClass('changeColor');
            logo.addClass('black');
        }else{
            menu.removeClass('changeColor');
            logo.removeClass('black');
        }
        if($(this).scrollTop()> hiddenMenu){
            menu.addClass('opacity');
        }else{
            menu.removeClass('opacity');
        }

        if(menuPos>navPos){
            nav.addClass('big');
            subscribe.addClass('small');
            content.addClass('black');
            TweenLite.to($('.nav_wr'), 1, {transform:'matrix(1, 0, 0, 1, 0, 20)', ease: Expo.easeOut,delay: 0.1});
        }else{
            nav.removeClass('big');
            subscribe.removeClass('small');
            content.removeClass('black');
            TweenLite.to($('.nav_wr'), 1, {transform:'matrix(1, 0, 0, 1, 0, 0)', ease: Expo.easeOut,delay: 0.1});
        }
   });

   $('footer').css('display', 'flex');
           
  }
  render() {
    return (
        <div className={`top_wr logo_rpw ${this.props.containerStyle !== undefined ? this.props.containerStyle : ''}`}>
          <div className={`logo ${this.props.logoStyle !== undefined ? this.props.logoStyle : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="150.39" height="67.056" viewBox="0 0 150.39034 67.056482"><path d="M144.808.234a5.5 5.5 0 0 0-5.418 5.579V61.46a5.5 5.5 0 1 0 11 0V5.813a5.5 5.5 0 0 0-5.582-5.579zM85.282.242a5.5 5.5 0 0 0-5.261 7.506l20.908 55.647a5.5 5.5 0 0 0 10.306-.026l20.592-55.648a5.5 5.5 0 1 0-10.316-3.817L106.038 45.72 90.32 3.879A5.5 5.5 0 0 0 85.282.242zM66.714 0a5.5 5.5 0 0 0-5.418 5.579v55.648a5.5 5.5 0 1 0 11 0V5.58A5.5 5.5 0 0 0 66.714 0zM26.978.314a5.5 5.5 0 0 0-5.06 3.516L.407 59.48a5.5 5.5 0 1 0 10.26 3.964l5.567-14.406h22.317l5.842 14.48a5.5 5.5 0 1 0 10.2-4.113L32.149 3.756a5.5 5.5 0 0 0-5.17-3.442zm.177 20.471l6.96 17.252H20.486l6.668-17.252z" overflow="visible" color="#000" fontWeight="400" fontFamily="sans-serif" whiteSpace="normal" fill="#1b1b1c" fillRule="evenodd"/></svg>
            <a href="http://aivi.ru/" className="logo-link" />
          </div>
          <div className="title_wr">
            <div className={`title ${this.props.titleStyle !== undefined ? this.props.titleStyle : ''}`}><a className="menu-link" href="/">Блог</a></div>
          </div>
        </div>
    )
  }
}
