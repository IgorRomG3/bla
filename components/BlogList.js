import React from 'react';
import Link from 'next/link';
import $ from 'jquery';
import {TweenLite, Power4} from 'gsap';

export default class BlogList extends React.Component {

  componentDidMount() {

          // var body = document.body;
          // body.classList ? body.classList.add('withJs') : body.className += ' withJs';
          //Анимация меню, категорий и лого в меню

          // var back = $('.back_link'),
          //     logo = $('header .logo svg path'),
          //     date_public  = $('.date_public'),
           var preheader = $('.preheader'),
            h1 = $('.h1'),
            categories = $('.categories');
          // setTimeout(function(){
          //     back.addClass('block_show');
          //     date_public.addClass('block_show');
          //     logo.css('fill','#fff');
          //     $('.right_block .description').addClass('show');
          // }, 300);

          TweenLite.from(preheader, .5, {css:{top: '100px'}, ease: Power4.easeOut});
          TweenLite.to(preheader, .2, {css:{opacity: '1'}, ease: Power4.easeOut});
          TweenLite.from(h1, .5, {css:{top: '100px'}, ease: Power4.easeOut, delay: 0.2});
          TweenLite.to(h1, .2, {css:{opacity: '1'}, ease: Power4.easeOut, delay: 0.2});
          TweenLite.from(categories, .5, {css:{top: '100px'}, ease: Power4.easeOut, delay: 0.4});
          TweenLite.to(categories, .2, {css:{opacity: '1'}, ease: Power4.easeOut, delay: 0.4});

        //Меню
        // $(document).ready(function(){

        //   $(window).on('scroll',function(){

        //       var menu = $('.top_wr');
        //       var logo = $('.logo');
        //       var menuPos = $('.top_wr').offset().top;
        //       var nav = $('.nav');
        //     //   var content = $('.content-fake-bg');
        //       var subscribe = $('.content .subscribe');
        //       if($(this).scrollTop()>menu.height()){
        //           menu.addClass('scroll');
        //       }else{
        //           menu.removeClass('scroll');
        //       }
        //   });
        //   });

        const newsItemLink = $('.news-item-link');

        newsItemLink.click(function(e) {
          e.preventDefault();
          const linkUrl = $(this).attr('href');
          $('#rootIndex').fadeOut(800);
          TweenLite.to($('.h1'), 0.8, {y: -30});
          TweenLite.to($('.h1'), 0.1, {opacity: 0});
          //Прячем футер при переходе на отдельный пост
          // $('#footer').css('visibility', 'hidden');
          setTimeout(function(url) { window.location = url; }, 800, linkUrl);
        });

        //Анимация появления постов    
        $(document).ready(function() {
          $('.news-item').each(function(i) {
              if(i<3) {
                  TweenLite.to($(this), .5, {opacity: '1', ease: Power4.easeOut, delay: 0.6 + i/5});
                  TweenLite.from($(this), .5, {bottom: '-60px', ease: Power4.easeOut, delay: 0.6 + i/5});
                  TweenLite.to($(this).find('.news-fake-bg'), .5, {bottom: '100%', ease: Power4.easeOut, delay: 0.8 + i/5});
              }
          });

          $(window).scroll(function(){

            $('.news-item').each(function(i) {
                if($(window).scrollTop() >= $(this).offset().top - 600 && i>2) {
                    TweenLite.to($(this), .5, {opacity: '1', ease: Power4.easeOut, delay: 0.6 + i/5});
                    TweenLite.to($(this).find('.news-fake-bg'), .5, {bottom: '100%', ease: Power4.easeOut, delay: 0.8 + i/5});
                }
            });
  
            $('.news-header-wrap').each(function(i) {
                if($(window).scrollTop() >= $(this).parent().offset().top - 350) {
                    setTimeout(()=> {
                        $(this).css('opacity','1');
                        TweenLite.to($(this).find('.news-list-bradcrumbs'), 1, {opacity: '1', ease: Power4.easeOut});
                        TweenLite.to($(this).find('.news-item-line'), 1, {opacity: '1', ease: Power4.easeOut, delay: 0.3});
                        TweenLite.to($(this).find('.news-h3'), 1, {opacity: '1', ease: Power4.easeOut, delay: 0.6});
                        TweenLite.to($(this).find('.news-h3'), .5, {bottom: '0', ease: Power4.easeOut, delay: 0.6});
                    }, 1000);
                }
            });
          });
        });
  }
  
  render() {

    return(
      <ul className="news-list">
        {this.props.data.map(({id, category, srcImg, date, route, title, description}) => (
          <li key={id} data-category={category} className="news-item">
              <div className="news-img-wrap">
                <img className="news-img" src={srcImg} alt="" />
                <div className="news-fake-bg"></div>
              </div>
              <div className="news-header-wrap">
                <div className="news-item-line"></div>
                <div className="news-item-header">
                  <div className="news-list-bradcrumbs">
                    <span className="bradcrumbs-category">{category}</span> | <span className="bradcrumbs-date">{date}</span>
                  </div>
                  <h3 className="news-h3">{title}</h3>
                </div>
              </div>
              <Link as={`/${route}`} href={`/post?route=${route}`}>
                <a className="news-item-link"></a>
              </Link>
          </li>
        ))}
      </ul>
    )
  }
}
