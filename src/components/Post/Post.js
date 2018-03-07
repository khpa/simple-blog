import React from 'react';

import './Post.css';

const post = (props) => {
    let title = props.title;
    if (title.length>20 ) {title = props.title.substr(0,20)+'...'

    }
    return (
    <article className="Post" onClick={props.clicked}>
        <h1>{title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
    )
};

export default post;