import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { instance } from './data';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const { data } = await instance.get();
  return data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    const response = await instance.post('', newContact);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await instance.delete(`/${contactId}`);
    return contactId;
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
    isLoading: false,
    error: '',
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
      });
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

const persistedReducer = persistReducer(persistConfig, contactsSlice.reducer);
export const { setFilter } = contactsSlice.actions;

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
