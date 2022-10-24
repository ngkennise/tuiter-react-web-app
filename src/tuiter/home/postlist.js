import React from "react";
import postsitemArray from './postsitem.json';
import PostItem from "./post-item";

const PostTweetList = () => {
    return(
        <ul className="list-group">
            {
                postsitemArray.map(post =>
                                       <PostItem
                                           key={post.id} post={post}/> )
            }
        </ul>
    );
};
export default PostTweetList;

