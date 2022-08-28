import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    showMenu: false,
    isSaving: false,
    messageSave: "",
    notes: [],
    active: null,

    // active: {
    //   id: "123",
    //   title: "",
    //   body: "",
    //   date: 123456789,
    //   imageUrls: [https://foto1.jpg, https://foto2.jpg]
    // }
  },
  reducers: {
    setMenu: (state) => {
      state.showMenu = !state.showMenu;
    }, 
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
      state.messageSave = "";
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSave = "";
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
    },
    updateNote: (state, { payload }) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) =>
        note.id === payload.id ? payload : note
      );
      state.messageSave = `${payload.title}, ACTUALIZADA :)`;
    },

    setPhotosToActiveNote: (state, action) => {
      state.active.imageUrls.push(...action.payload);
      state.isSaving = false;
    },

    clearNoteLogout: (state) => {
      (state.isSaving = false),
        (state.messageSave = ""),
        (state.notes = []),
        (state.active = null);
    },
    delteNoteById: (state, { payload }) => {
      state.active = null;
      state.notes = state.notes.filter((note) => note.id !== payload);
    },
  },
});

export const {
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  delteNoteById,
  setPhotosToActiveNote,
  clearNoteLogout,
  setMenu
} = journalSlice.actions;
