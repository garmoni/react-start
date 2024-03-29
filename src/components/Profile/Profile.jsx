import React from 'react';
import  classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return <div className={classes.content}>
        <ProfileInfo/>
        <MyPosts myPostData={props.profilePage.myPostData}
                 newPostText={props.profilePage.newPostText}
                 dispatch={props.dispatch} />
     </div>
}

export default Profile;