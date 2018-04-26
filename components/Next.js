import React from 'react';
import Link from 'next/link';

export default class Next extends React.Component {

  render() {
    return (
      <section style={this.props.nextTitle === '' ? {display: 'none'} : {display: 'block'}}
               className="nav">
    		<div className="nav_wr">
    			<div className="next">Следующая статья</div>
    			<div className="next_title">{this.props.nextTitle}</div>
    			<div className="next-arrow">
            <img src="static/img/blog/header/arrow-right.svg" alt="nextArticle" />
          </div>
    		</div>
        <Link as={`/${this.props.href}`} href={`/post?route=${this.props.href}`}>
          <a className="nav-link"></a>
        </Link>  
    	</section>
    )
  }
}
