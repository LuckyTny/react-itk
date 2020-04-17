import React from 'react';
import MyPosts from './MyPosts'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/dashboardReducer'
import { connect } from 'react-redux';

// const MyPostsContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();
  
//         let addPost = () => {
//           store.dispatch(addPostActionCreator())
          
//         }
      
//         let onPostChange = (text) => {
//           let action = updateNewPostTextActionCreator(text)
//           store.dispatch(action)
//         }
//         return <MyPosts 
//         updateNewPostText={onPostChange}
//         addPost={addPost} 
//         posts={state.dashboardPage.posts} 
//         newPostText={state.dashboardPage.newPostText}
//         />

//         } 
//       }
//     </StoreContext.Consumer>
//   )
  
// }
const mapStateToProps = (state) => {
  return{
    posts: state.dashboardPage.posts,
    newPostText: state.dashboardPage.newPostText

  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text))
    }
  }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;