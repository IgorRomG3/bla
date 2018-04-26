import React from 'react';
import $ from 'jquery';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {

    // fetch('../static/data/blog-categories.json').then((resp)=>{ return resp.json() }).then((data)=>{
    //   this.setState({data: data});
    //   const firstCategoryItem = $('.categories .categories-item:first-child > div');
    //   firstCategoryItem.addClass('active-line');
    // });

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
