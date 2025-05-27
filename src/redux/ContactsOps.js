import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6835cadecd78db2058c32f63.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/getAll", async () => {
  console.log(" fetchContacts");
});
