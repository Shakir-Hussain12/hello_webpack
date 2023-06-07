import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMessage = createAsyncThunk('message/fetchmessage', async () => {
    const response = await axios.get('http://127.0.0.1:5000/api/greeting');
    return response.data;
});

const messageSlice = createSlice({
    name: 'message',
    initialState: {
        greeting: '',
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchMessage.pending, (state) => {
            return {
                ...state,
                status: 'loading'
            };
        })

        .addCase(fetchMessage.fulfilled, (state, action) => {
            return {
                ...state,
                status: 'succeeded',
                greeting: action.payload.greeting
            };
        })

        .addCase(fetchMessage.rejected, (state, action) => {
            return {
                ...state,
                status: 'failed',
                error: action.error.message
            };
        })
    }
});

export default messageSlice.reducer;