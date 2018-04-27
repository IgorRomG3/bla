import React from 'react';
import $ from 'jquery';
import {TweenLite, Expo} from 'gsap';
import Menu from './Menu';

export default class Title extends React.Component {

  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {

		var body = document.body;
		body.classList ? body.classList.add('withJs') : body.className += ' withJs';

      	var back = $('.back_link');
      	var logo = $('header .logo svg path');
      	var date_public  = $('.date_public');
      	var cont = $('.right_block h1, .description span');
      	var cont = $('.description span');
      	setTimeout(function(){
      		back.addClass('block_show');
      		date_public.addClass('block_show');
      		logo.css('fill','#fff');
			//   $('.right_block .text_desc').addClass('show');
      	}, 300);
      	setTimeout(function(){
			splitText(".header_title", animateText);
			$('.right_block .description').addClass('show');
			$('body.withJs header .description.show::before').addClass('show');
			splitText(".text_desc", animateText2);
      	}, 500);

      function animateText(text){
      	var parent = $(".header_title");
      	var span = parent.find("span");
      	var offset;
      	var delay = 0;
      	TweenLite.set(span, {y: "100%", lineHeight: '5'});
      	parent.addClass("show");
      	span.each(function(index, el) {


      		var currentOffset = $(el).offset().top;
      		if(index === 0){
      			offset = currentOffset;
      		}

      		if(currentOffset > offset + 4){
      			delay += 0.3;
      		}
      		if(index === span.length - 1){
      			TweenLite.to($(el), .1, {
      				y: "0%",
      				lineHeight: '1.23',
      				delay: delay,
      				ease: Expo.easeOut,

      				onComplete: function(){
      					parent.html(text);
      					parent.removeAttr("style");
      				}
      			});
      		}else{
      			TweenLite.to($(el), .1, {y: "0%", lineHeight: '1.23', delay: delay, ease: Expo.easeOut});
      		}

      		offset = currentOffset;
      	});

      }
      function animateText2(text){
      	var parent = $(".text_desc");
      	var span = parent.find("span");
      	var offset;
      	var delay = 0;
      	TweenLite.set(span, {y: '100%', lineHeight: '8'});
      	parent.addClass("show");

      	span.each(function(index, el) {



      		var currentOffset = $(el).offset().top;
      		if(index === 0){
      			offset = currentOffset;
      		}

      		if(currentOffset > offset + 4){
      			delay += 0.2;
      		}
      		if(index === span.length - 1){

      		TweenLite.to($(el), .1, {y: '0%',lineHeight: '2.29', delay: delay, ease: Expo.easeOut,
      			onComplete: function(){
      				parent.html(text);
      				parent.removeAttr("style");
      			}});

      		}else{
      			TweenLite.to($(el), .5, {y: '0%',lineHeight: '2.29', delay: delay, ease: Expo.easeOut});
      		}



      		offset = currentOffset;
      	});

      }

      function splitText(id, callback){
      	var el = $(id);
      	var text = el.html().trim();
      	//var textArrayWithBR = text.split("<br>");
      	var textArrayWithBR = text.split();
      	textArrayWithBR.forEach(function(element, index, array){
      		// var textArray = element.trim().split("");
      		array[index] = '<div><span>' + element + '</span></div>';
      	});
      	el.height(el.height());
      	if($(window).width() >= 1201 ) {
      		el.html(textArrayWithBR.join("<div>&nbsp;</div>"));
      	}

      	if(callback){
      		callback(text);
      	}
      }
  }

  goBack() {
    window.history.back();
  }

  render() {
    return(
      <header>
    		<Menu />
    		<div className="bottom_wr">
    			<div className="left_block">
    				<a onClick={this.goBack} className="back_link">
    					<span className="blank_text">Назад</span>
    				</a>
    			</div>
    			<div className="right_block">
    				<div className="date_public">
    					<span className="category-text">{this.props.data.category}</span> &mdash; <span>{this.props.data.date}</span>
    				</div>
    				<h1 className="header_title">{this.props.data.title}</h1>
    				<div className="description">
    					<div className="text_desc">{this.props.data.description}</div>
    				</div>
    			</div>
    		</div>
    	</header>
    )
  }
}
