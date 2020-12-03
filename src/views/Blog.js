import React, {Component} from 'react';

export default class Blog extends Component {
    constructor() {
        super();

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/blog/posts')
            .then(res => res.json())
            .then(data => this.setState({ posts: data }))
            .catch(error => console.error(error))
    }

    render() {
        return (
            <React.Fragment>
            <div>
                <h2>Welcome to the Blog Page!</h2>
                {this.state.posts.map(p => (
                    <div className="col-md-10" key={p.id}>
                        <div className="card">
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        <a href="#">{p.body}</a>
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
        )
    }
}