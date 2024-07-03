import {createSlice, createSelector} from '@reduxjs/toolkit';

const initialState = {
    registeredUsers: [],
};

const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        registerUser: (state, action) => {
            const {username, password} = action.payload;
            state.registeredUsers.push({username, password});
        },
    },
});

export const {registerUser} = registrationSlice.actions;

export const selectIsUserRegistered = createSelector(
    (state) => state.registration.registeredUsers,
    (_, {username}) => username,
    (registeredUsers, username) =>
        registeredUsers.some((user) => user.username === username)
);

export default registrationSlice.reducer;