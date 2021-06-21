import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/formsControls/FormsControls';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    //let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

const AddNewPostForm = (props) => {
    return ( 
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name='newPostText' 
                   validate={[required, maxLength10]}/>
        </div>
            <div><button>Add post</button></div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;