import React from "react";
import { addPostAC, deletePostAC, profileReducer, ProfileUserType } from "./profileReducer";
import { PostType } from "./store";


const startState = {
    posts: [
        { id: 1, message: 'Hello, how are you', likesCount: '20' },
        { id: 2, message: 'Don,t touch my dog', likesCount: '2' },
        { id: 3, message: 'Hello, John', likesCount: '1000' },
    ] as Array<PostType>,
    profile: {} as ProfileUserType,//////////////////////????
    status: ''
}

test('New post should be added', () => {

    let action = addPostAC('new post title')
    let newState = profileReducer(startState, action)

    expect(newState.posts.length).toBe(4)
})
test('Message of new post should be correct', () => {
    
    let action = addPostAC('new post title')
    let newState = profileReducer(startState, action)

    expect(newState.posts[3].message).toBe('new post title')
})
test('Post should be deleted', () => {

    let action = deletePostAC(3)
    let newState = profileReducer(startState, action)

    expect(newState.posts.length).toBe(2)
})
test('Length of post after deleting should not changed if id not correct', () => {

    let action = deletePostAC(10)
    let newState = profileReducer(startState, action)

    expect(newState.posts.length).toBe(3)
})