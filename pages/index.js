import React from 'react';
import $ from 'jquery';
import {TweenLite, Power4} from 'gsap';
import Menu from '../components/Menu';
import Categories from '../components/Categories';
import BlogList from '../components/BlogList';
import Head from 'next/head';
import Footer from '../components/Footer';
import fetch from 'isomorphic-unfetch';

export default class Blog extends React.Component {

  componentDidUpdate() {
    window.onbeforeunload = function(){ window.scrollTo(0,0); }
  }

  render() {
    return(
        <div>
          <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon" /> 
          <link rel="stylesheet" href="../static/css/fontsblog.css" />
          <link rel="stylesheet" href="../static/css/blog/bootstrap-reboot.min.css" />
          <link rel="stylesheet" href="../static/css/blog/main.css" />
          <title>Блог</title>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        </Head>
          <noscript>
            You need to enable JavaScript to run this app.
          </noscript>
      
        <header className='empty'>
          <Menu containerStyle='changeColor white-bg'
                logoStyle='black'
                titleStyle='title-black'/>
        </header>
        <main>
      		<div className="container">
      			<div className="section-header">
      				<div className="preheader">
      				    {this.props.title.preheader}
      				</div>
      				<h1 className="h1">{this.props.title.h1}</h1>
      				<Categories categories={this.props.c} />
      			</div>
            <ul className="news-list">
            <BlogList data={this.props.data} />
            </ul>  
      		</div>
      	</main>
        <Footer />
        <script src="https://api-maps.yandex.ru/2.0-stable/?load=package.standard&lang=ru-RU" type="text/javascript"></script>
        <script src="../static/js/yandeks_map.js" charset="utf-8"></script>
      </div>
    )
  }
}

Blog.getInitialProps = async function() {
    const res = await fetch('http://localhost:3000/static/data/h1.json')
    const h1 = await res.json()

    const res2 = await fetch('http://localhost:3000/static/data/blog-single.json')
    const posts = await res2.json()

    const res3 = await fetch('http://localhost:3000/static/data/blog-categories.json')
    const cat = await res3.json()
  
    return {
      title: h1,
      data: posts,
      c: cat
    }
  }

