import React, {Component} from 'react';
import Post from '../components/Post';


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
                    {this.state.posts.map(p => ( <Post p={p} key={p.id}/>))} 
                </div>
            </React.Fragment>
        )
    }
}