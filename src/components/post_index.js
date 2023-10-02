import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostIndex extends Component {
    // 컴포넌트가 돔에 표시될 때 발생하는 이벤트
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className='list-group-item' key={post.id}>
                    {post.title}
                </li>
            );
        })
    }

    render() {
        return (
            <div>
                <h3>Posts</h3>
                <ul className='list-group'>
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {       // redux state
    return { posts: state.posts }
}

// 컴포넌트의 props 에 state와 actionCreator를 넣어준다.
export default connect(mapStateToProps, { fetchPosts })(PostIndex);