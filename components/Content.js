import React from 'react';
import $ from 'jquery';
import {TweenLite, Expo, Power4} from 'gsap';
import Subscribe from './Subscribe';

export default class Content extends React.Component {

  componentDidMount() {

      $(window).on('scroll',function(){
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

  render() {
    return(
      <section className="content">
        <div className="content-fake-bg"></div>
        <div id="content" dangerouslySetInnerHTML={{__html: this.props.templateUrl}} />
        <div className="container content-text">
          <Subscribe />
        </div>
        <hr className="bottom" />
      </section>
    )
  }
}
