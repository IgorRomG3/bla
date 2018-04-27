import fetch from 'isomorphic-unfetch';
import Menu from '../components/Menu';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Head from 'next/head';
import Content from '../components/Content';
import Next from '../components/Next';

const Post =  (props) => (
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
    </Head>
    <Title data={props.data} />
    <Content templateUrl={props.template} />
    <Next href={props.data.id < props.array.length - 1 ? props.array[props.data.id + 1].route : "#"} nextTitle={props.data.id >= props.array.length - 1 ? '' : props.array[props.data.id + 1].title} />
    <Footer />
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

  if(port !== undefined) {
    testData = `https://salty-ridge-45524.herokuapp.com/static/data/test-data.json`;
    single = `https://salty-ridge-45524.herokuapp.com/static/data/blog-single.json`;
    //  if(testData == undefined || single == undefined) {
    //   testData = `https://salty-ridge-45524.herokuapp.com/static/data/test-data.json`;
    //   single = `https://salty-ridge-45524.herokuapp.com/static/data/blog-single.json`;
    //  }
  }else {
     testData = '../static/data/test-data.json';
     single = '../static/data/blog-single.json';
  }

  const res2 = await fetch(testData)
  const posts = await res2.json()
  console.log(posts,'posts data');

  const data = posts[route];
  console.log(data.id, 'data index');

  if(port !== undefined) {
     tmlt = `https://salty-ridge-45524.herokuapp.com/static/templates/${data.templateUrl}`;
    //  if(tmlt ==undefined) {
    //   tmlt = `https://salty-ridge-45524.herokuapp.com/static/templates/${data.templateUrl}`;
     }
  }else {
     tmlt = `../static/templates/${data.templateUrl}`;
  }

  const res3 = await fetch(tmlt)
  const template = await res3.text()

  const res4 = await fetch(single)
  const array = await res4.json()


  return {data, template, array};
}

export default Post;