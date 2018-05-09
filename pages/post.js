import fetch from 'isomorphic-unfetch';
import Menu from '../components/Menu';
import Subscribe from '../components/Subscribe';
import Title from '../components/Title';
import Head from 'next/head';
import Content from '../components/Content';
import Next from '../components/Next';

const Post =  (props) => (
  <div id="rootPost">
    <Title data={props.data} />
    <Content templateUrl={props.template} />
    <Next href={props.data.id < props.data.length - 1 ? props.data[props.data.id + 1].route : "#"} nextTitle={props.data.id >= props.array.length - 1 ? '' : props.array[props.data.id + 1].title} />
  </div>  
)

Post.getInitialProps = async function(context) {

  const route = context.query.route;
  console.log(context.query, 'query data');

  const port = context.query.port;
  console.log(port, 'port');

  let testData,
      single,
      tmlt;
  var data;

  if(port !== undefined) {
    // testData = `https://salty-ridge-45524.herokuapp.com/static/data/test-data.json`;
    single = `https://salty-ridge-45524.herokuapp.com/static/data/blog-single.json`;
  }else {
    //  testData = '../static/data/test-data.json';
     single = '../static/data/blog-single.json';
  }

  const res2 = await fetch(single)
  const posts = await res2.json()
  console.log(posts,'posts data');

  for(var i=0; i< posts.length; i++) {
    for(var key in posts[i]) {
      if(posts[i][key] === route) {
        data = posts[i]
      }
    }
  }

  // const data = posts[route];
  console.log(data, 'current data');

  if(port !== undefined) {
     tmlt = `https://salty-ridge-45524.herokuapp.com/${data.templateUrl}`;
  }else {
     tmlt = `../${data.templateUrl}`;
  }

  const res3 = await fetch(tmlt)
  const template = await res3.text()

  const res4 = await fetch(single)
  const array = await res4.json()


  return {data, template, array};
}

export default Post;