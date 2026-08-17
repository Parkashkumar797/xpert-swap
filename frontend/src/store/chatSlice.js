import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  unread : 0,
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addChatAction: (state, action) => {
      const { userId, message, time, sender = false } = action.payload;
      if (!state[userId]) {
        state[userId] = { messages: [], unread: 0 };
      }

      state[userId].messages.push({
        message,
        time: time || new Date().toISOString(),
        sender,
      });

      if (!sender) {
        // Only increment unread count for incoming messages
        state.unread = (state.unread || 0);
      }
      
    },
    incrementUnreadForUser: (state, action) => {
      if (!state[action.payload.userId]) {
        state[action.payload.userId] = { messages: [], unread: 0 };
      } 
      state[action.payload.userId].unread = (state[action.payload.userId].unread || 0) + 1;
      state.unread = (state.unread || 0) + 1;
    },
    resetUnreadForUser: (state, action) => {
      if (!state[action.payload.userId]) {
        state[action.payload.userId] = { messages: [], unread: 0 };
      } 
      const userUnread = state[action.payload.userId].unread || 0;
      state[action.payload.userId].unread = 0;
      state.unread = Math.max(0, (state.unread || 0) - userUnread);
    },

  },
});

export const { addChatAction,incrementUnread,incrementUnreadForUser,resetUnread,resetUnreadForUser } = chatSlice.actions;
export default chatSlice.reducer;