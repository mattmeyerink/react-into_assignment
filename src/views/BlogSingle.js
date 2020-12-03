import React, {Component} from 'react';

export default class BlogSingle extends Component {
    constructor() {
        super();

        this.state = {
            post: {}
        }
    }

    componentDidMount() {
        fetch(`http://localhost:5000/blog/posts/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(data => this.setState({ post: data }))
            .catch(error => console.error(error))
    }

    render() {
        const p = this.state.post
        return (
            <div>
                <h2>Welcome to Individual Posts page!</h2>
                <div className="col-md-10" key={p.id}>
                    <div className="card">
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <p>{p.body}</p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}