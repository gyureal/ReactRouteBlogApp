import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostIndex extends Component {
    // 컴포넌트가 돔에 표시될 때 발생하는 이벤트
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        console.log('props post', this.props.posts);
        return (
            <div>
                Posts Index
            </div>
        );
    }
}

function mapStateToProps(state) {       // redux state
    return { posts: state.posts }
}

// 컴포넌트의 props 에 state와 actionCreator를 넣어준다.
export default connect(mapStateToProps, { fetchPosts })(PostIndex);