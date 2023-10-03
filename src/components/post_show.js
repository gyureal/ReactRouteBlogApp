import React, {Component} from 'react';
import { connect } from 'react-redux';      // state 가져다 써야함
import { fetchPost, deletePost } from '../actions';     // 이벤트 핸들러에 action creator 등록해야함
import { Link } from 'react-router-dom';

class PostShow extends Component {

    componentDidMount() {
        const {id} = this.props.match.params; // put by react-router
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        const {id} = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const {post} = this.props;

        if(!post) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Link to="/">back to the index</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}
                > DELETE</button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <h6>content: {post.content}</h6>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {       // list of posts , PostShow 컨테이너로 전달되는 props 주입
    console.log(posts);
    return { post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);