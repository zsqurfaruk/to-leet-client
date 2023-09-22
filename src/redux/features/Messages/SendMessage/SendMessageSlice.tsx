import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

interface Message {
   
  conversationId: string;
  productId: string;
  message: string;
  userName: string;
  senderEmail: string | number;
  receiverEmail: string | number;
 
}

interface MessagesState {
  messages: Message[];
  loading: boolean;
}

interface MessageData {
  conversationId: string;
  productId: string;
  message: string;
  userName: string;
  senderEmail: string | number;
  receiverEmail: string | number;
}

export const sendMessage = createAsyncThunk(
  'messages/sendMessage',
  async (messagesData: MessageData) => {
    try {
      // Emit the message to the server via socket.io
      socket.emit('send-message', messagesData);

      // Send the message to the API
      const response = await axios.post('http://localhost:5000/api/v1/messages', messagesData);
 
      if (response.status === 200) {
        return messagesData.receiverEmail;
      }

      throw new Error('Network response was not ok');
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }
);

const initialState: MessagesState = {
  messages: [],
  loading: false,
};

export const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendMessage.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(sendMessage.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const selectMessages = (state: { messages: MessagesState }) => state.messages.messages;
export const selectLoading = (state: { messages: MessagesState }) => state.messages.loading;

export default messageSlice.reducer;
