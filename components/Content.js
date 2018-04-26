import React from 'react';
import $ from 'jquery';
import {TweenLite, Expo, Power4} from 'gsap';
import Subscribe from './Subscribe';
import Footer from '../components/Footer';

export default class Content extends React.Component {

  componentDidMount() {

      $(window).on('scroll',function(){

    		var menu = $('.top_wr');
    		var logo = $('.logo');
    		var conPos = $('.content-fake-bg').position().top;
    		var menuPos = $('.top_wr').offset().top;
    		// var hiddenMenu = $('.nav').position().top+$('.top_wr').height();
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
    		// if($(this).scrollTop()> hiddenMenu){
    		// 	menu.addClass('opacity');
    		// }else{
    		// 	menu.removeClass('opacity');
    		// }


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

    		// Анимация контета секции класса 'content'
    		$('.container').each(function() {
    			if($(window).scrollTop() >= $(this).offset().top - 300) {
    				TweenLite.to($(this).find('p'), 1, {css: {transform: 'translateY(0)', opacity: '1', transition: 'opacity .2s ease'}, ease: Power4.easeOut});
    				TweenLite.to($(this).find('img'), 1, {css: {transform: 'translateY(0)', opacity: '1', transition: 'opacity .2s ease'}, ease: Power4.easeOut});
    				TweenLite.to($(this).find('ul'), 1, {css: {transform: 'translateY(0)', opacity: '1', transition: 'opacity .2s ease'}, ease: Power4.easeOut});
    				TweenLite.to($(this).find('ol'), 1, {css: {transform: 'translateY(0)', opacity: '1', transition: 'opacity .2s ease'}, ease: Power4.easeOut});
    				TweenLite.to($(this).find('table'), 1, {css: {transform: 'translateY(0)', opacity: '1', transition: 'opacity .2s ease'}, ease: Power4.easeOut});
            TweenLite.to($(this).find('video'), 1, {css: {transform: 'translateY(0)', opacity: '1', transition: 'opacity .2s ease'}, ease: Power4.easeOut});
    			}
    		});
    	});

      $('.img-wrap').each(function() {
    		var self = $(this);
    		var setScrollWatch = setInterval(function() {
    			var scroll = $(window).scrollTop();
    			if(scroll >= self.offset().top - 500) {
    				TweenLite.to(self.find('.img-fake-bg'), 1, {bottom: '0', ease: Power4.easeOut});
    				TweenLite.to(self.find('.img-fake-bg'), 1, {bottom: '100%', ease: Power4.easeOut, delay: .5});
    				clearInterval(setScrollWatch);
    			}
    		}, 100);
    	});
  }

  // componentDidUpdate() {
  //   fetch(this.props.templateUrl).then((resp)=>{ return resp.text() }).then((text)=>{
  //     $('#content').html(text);

  //     window.onbeforeunload = function(){ window.scrollTo(0,0); }
  //   });
  // }

  render() {
    return(
      <section className="content">
        <div className="content-fake-bg"></div>
        <div id="content" dangerouslySetInnerHTML={{__html: this.props.templateUrl}} />>
        <div className="container content-text">
          <Subscribe />
        </div>
        <hr className="bottom" />
      </section>
    )
  }
}
