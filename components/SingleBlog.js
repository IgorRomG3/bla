import React from 'react';
// import data from './../data/blog-single.json';
import Title from './Title';
import Content from './Content';
import Next from './Next';
import $ from 'jquery';
import Footer from './Footer';

export default class Blog extends React.Component {

  constructor(props) {
    super(props);
    this.data = this.props.data;
    this.i = this.props.i;
    this.state = {
      i: this.i,
      data: this.data
    }
  }

  render() {
    return (
      <div>
        <Title data={this.state.data}
               index={this.state.i}/>
        <Content templateUrl={this.state.data[this.state.i].templateUrl} />
        <Next href={this.state.i < this.state.data.length - 1 ? this.state.data[this.state.i + 1].route : "#"} nextTitle={this.state.i >= this.state.data.length - 1 ? '' : this.state.data[this.state.i + 1].title} />
      </div>
    )
  }
}
