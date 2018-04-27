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
      </div>
    )
  }
}

Blog.getInitialProps = async function() {
    const PORT = process.env.PORT;
    console.log(PORT, 'from fetch index');

    let h1Data,
        singleData,
        categoriesData;

    if(PORT !== undefined) {
      h1Data = `http://localhost:${PORT}/static/data/h1.json`;
      singleData = `http://localhost:${PORT}/static/data/blog-single.json`;
      categoriesData = `http://localhost:${PORT}/static/data/blog-categories.json`;
    }else {
      h1Data = '../static/data/h1.json';
      singleData = '../static/data/blog-single.json';
      categoriesData = '../static/data/blog-categories.json';
    }  
    const res = await fetch(h1Data)
    const h1 = await res.json()

    const res2 = await fetch(singleData)
    const posts = await res2.json()

    const res3 = await fetch(categoriesData)
    const cat = await res3.json()
  
    return {
      title: h1,
      data: posts,
      c: cat
    }
  }

