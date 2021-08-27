import React from 'react';
import { connect } from 'react-redux';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';


let mapStateToProps = state => {
    debugger
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = dispatch => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;