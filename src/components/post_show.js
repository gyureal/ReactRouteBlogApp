import React, {Component} from 'react';
import { connect } from 'react-redux';      // state 가져다 써야함
import { fetchPost } from '../actions';     // 이벤트 핸들러에 action creator 등록해야함

class PostShow extends Component {

    componentDidMount() {
        const {id} = this.props.match.params; // put by react-router
        this.props.fetchPost(id);
    }

    render() {
        const {post} = this.props;

        if(!post) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <h6>content: {post.content}</h6>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {       // list of posts , PostShow 컨테이너로 전달되는 props 주입
    return { post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchPost })(PostShow);