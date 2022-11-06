import {createSlice} from "@reduxjs/toolkit";

const initialProfile = {

    firstName: 'Jose',
    lastName: 'Annunziato',
    handle: '@jannunzi',
    profilePicture:  'react.png',
    bannerPicture: 'banner.png',
    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
    website: 'youtube.com/webdevtv',
    location: 'Boston, MA',
    dateOfBirth: 'July 7th 1968',
    dateJoined: 'April 2009',
    followingCount: 340,
    followersCount: 223
}

const profileSlice = createSlice({
                                     name: 'profile',
                                     initialState: initialProfile,
                                     reducers: {
                                         editProfile(state, action) {
                                             const p = action.payload;
                                             state.firstName = p.firstName;
                                             state.lastName = p.lastName;
                                             state.bio = p.bio;
                                             state.location = p.location;
                                             state.website = p.website;
                                             state.dateOfBirth = p.dateOfBirth;
                                             return state;
                                         }
                                     }
                                 });

export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;
