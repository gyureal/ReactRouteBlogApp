import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

export function fetchPosts() {
    const ROOT_URL = "http://localhost:8080/api";

    const request = axios.get(`${ROOT_URL}/posts`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}