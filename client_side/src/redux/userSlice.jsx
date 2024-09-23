import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'users',
    initialState: {
        user: []
    },
    reducers: {
        // You can define reducers here
    }
});

// export const { } = userSlice.actions;
export default userSlice.reducer;
