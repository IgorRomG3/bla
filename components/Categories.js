import React from 'react';
import $ from 'jquery';

export default class Categories extends React.Component {

  componentDidMount() {

    //Логика работы категорий
    $(document).ready(function() {
      var categoriesItem = $('.categories .categories-item'),
      firstCategoryItem = $('.categories .categories-item:first-child > div'),
      newsItem = $('.news-item');

      firstCategoryItem.addClass('active-line');

      categoriesItem.click(function() {
          var self = $(this);

          categoriesItem.each(function() {
          $(this).find('div').removeClass('active-line ');
          });

          $(this).find('div').addClass('active-line ');

          newsItem.each(function() {
          if($(this).attr('data-category') === self.attr('data-category')) {
              $(this).css('display', 'block');
          }else if(self.attr('data-category') === "Все") {
              $(this).css('display', 'block');
          }else {
              $(this).css('display', 'none');
          }
          });

      });
    })

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
