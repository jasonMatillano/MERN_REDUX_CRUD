import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: []
    },
    reducers: {
        getUser: (state, action) => {
            state.users = action.payload.map((user) => {
                return {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    age: user.age
                }
            })
        },
        addUser : (state, action) => {
            state.users.push(action.payload)
        },
        updateUser : (state, action) => {
            state.users = state.users.map((user) => {
                if(user.id === action.payload.id) {
                    return action.payload
                }
                return user
            })
        }
    }
});

export const {getUser, addUser, updateUser} = userSlice.actions;
export default userSlice.reducer;
