import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";
import React from "react";


it('length of posts should be incremented', () => {
    // test data
    let action = addPostActionCreator('it-kamasutra.com');
    let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11}
        ]
    };
    
    // action
    let newState = profileReducer(state, action);

    // expectation
    expect(newState.posts.length).toBe(5);
});

