import {  UploadFile } from "@mui/icons-material";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { FirebaseDB } from "../../src/firebase/config";
import { fileUpload } from "../../src/helpers/fileUpload";
import { loadNotes } from "../../src/helpers/loadNotes";
import {
  addNewEmptyNote,
  delteNoteById,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updateNote,
} from "./journalSlice";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote());
    
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const notes = await loadNotes(uid);

    dispatch(setNotes(notes));
  };
};

export const startUpdatingNote = () =>{
  return async (dispatch, getState) => {

    dispatch(setSaving())

    const { uid } = getState().auth;
    const { active:note } = getState().journal;
    
    const newNoteFirebase = {...note};

    delete newNoteFirebase.id;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);

    await setDoc(docRef, newNoteFirebase, { merge: true});

    dispatch(updateNote(note))

  }
}

export const startUploadingFiles = (files = []) => {
  return async(dispatch) => {
    dispatch(setSaving())

    const fileUploadFiles = [];

    for (const file of files) {
      fileUploadFiles.push(fileUpload(file))
    }

    const photosUrls = await Promise.all(fileUploadFiles)

    dispatch(setPhotosToActiveNote(photosUrls))

  }
}

export const startDeleteNote = () => {
  return async (dispatch, getState) => {
      
    const { uid } = getState().auth;
    const { active:note } = getState().journal;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)
    await deleteDoc(docRef);

    dispatch(delteNoteById(note.id))

  }
}