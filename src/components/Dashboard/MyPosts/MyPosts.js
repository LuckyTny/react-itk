import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {
  let postElements = props.posts.map( p => <Post message={p.post} likes={p.likesCount} /> );
  
  let newPostElement = React.createRef();

  let addPost = () => {

    props.addPost(); 
    
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updatePostText(text);
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
          <button onClick={ addPost }>Add Post</button>
        </div>
    </div>
      { postElements }
    </div>
  )
}

export default MyPosts;