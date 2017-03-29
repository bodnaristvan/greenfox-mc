'use strict';

import React from 'react';

export default class Kinja extends React.Component {
    render() {
        return (
          <article>
            <h1>{this.props.post ? this.props.post.headline : ''}</h1>
            <div dangerouslySetInnerHTML={{__html: this.props.post ? this.props.post.body : ''}}></div>
          </article>
        )
    }
}
