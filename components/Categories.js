import React from 'react';
import $ from 'jquery';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  render() {
    return(
      <div className="categories">
        <h2 className="name">Категории</h2>
        <ul className="categories-list">
          {this.props.categories.map(({category, id}) => (
            <li key={id} data-category={category} className="categories-item">
              {category}
              <div className="category-line" />
            </li>
          ))}
        </ul>
        <div className="clearfix"></div>
      </div>
    )
  }
}
