// messageSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

interface Message {
  _id: string;
  conversationId: string;
  productId: string;
  message: string;
  userName: string;
  senderEmail: string | number;
  receiverEmail: string | number;
  updatedAt: Date;
}

interface GetMessagesState {
  messages: Message[];
  loading: boolean;
}

export const fetchGetMessages = createAsyncThunk<
  Message[],
  { authorEmail: string | number; email: string | number }
>("messages/fetchMessages", async ({ authorEmail, email }) => {
  // Create a custom promise to handle the socket event
  

  try {
    // Wait for the socket event to be resolved
   
    socket.emit("set-email", authorEmail)
    // Once the socket event is resolved, make the API call
    const response = await fetch(
      `http://localhost:5000/api/v1/messages?receiverEmail=${authorEmail}&senderEmail=${email}`
    );
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
});

const initialState: GetMessagesState = {
  messages: [],
  loading: false,
};

export const getMessageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    // Other reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetMessages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGetMessages.fulfilled, (state, action: PayloadAction<Message[]>) => {
        state.messages = action.payload;
        state.loading = false;
      })
      .addCase(fetchGetMessages.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const selectMessages = (state: { messages: GetMessagesState }) => state.messages.messages;
export const selectLoading = (state: { messages: GetMessagesState }) => state.messages.loading;

export default getMessageSlice.reducer;
