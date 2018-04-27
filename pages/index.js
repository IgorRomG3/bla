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

  render() {
    return(
        <div> 
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
      h1Data = `https://salty-ridge-45524.herokuapp.com/static/data/h1.json`;
      singleData = `https://salty-ridge-45524.herokuapp.com/static/data/blog-single.json`;
      categoriesData = `https://salty-ridge-45524.herokuapp.com/static/data/blog-categories.json`;
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

