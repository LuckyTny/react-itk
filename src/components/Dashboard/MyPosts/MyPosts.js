import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/dashboardReducer'

const MyPosts = (props) => {
  let postElements = props.posts.map( p => <Post message={p.post} likes={p.likesCount} /> );
  
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost()
    // props.dispatch(addPostActionCreator())
    }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
    
  }
  return(  
    <div className={style.postBlock}>
      <div className="posts"><h3>My posts</h3></div>
      <div>
        <div>
          <textarea 
            onChange={ onPostChange }
            ref={ newPostElement }
            value={props.newPostText} />
        </div>
        <div>
          <button onClick={ onAddPost }>Add Post</button>
        </div>
    </div>
      { postElements }
    </div>
  )
}

export default MyPosts;