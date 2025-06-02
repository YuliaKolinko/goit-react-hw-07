import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6835cadecd78db2058c32f63.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/getAll", async () => {
  const response = await axios.get("/contacts");
  return response.data;
});
export const deleteContacts = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId) => {
    const response = await axios.delete(`/contacts/${contactId}`);
    return response.data;
  }
);
export const addContacts = createAsyncThunk(
  "contacts/addContact",
  async (newContact) => {
    const response = await axios.post("/contacts", newContact);
    return response.data;
  }
);
