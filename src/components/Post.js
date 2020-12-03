import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Post extends Component {
    render() {
        const p = this.props.p;
        
        return (
            <div className="col-md-10" key={p.id}>
                <div className="card">
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>
                                <Link to={`/blog/${p.id}`}>{p.body}</Link>
                            </p>
                        </blockquote>
                    </div>
                </div>
            </div>
        )
    }
}
