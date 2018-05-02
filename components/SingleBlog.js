import React from 'react';
import Title from './Title';
import Content from './Content';
import Next from './Next';

export default class Blog extends React.Component {

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
