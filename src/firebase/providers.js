import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googlePrivider = new GoogleAuthProvider();

export const singInGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googlePrivider);
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

export const registerWithEmailPassword = async ({displayName, email, password}) => {
  try {
    const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password );
    const { photoURL, uid } = result.user;

    await updateProfile(FirebaseAuth.currentUser, {
      displayName,
    })

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };

  } catch (error) {
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

export const loginWithEmailPassword = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(FirebaseAuth, email, password );

    const { uid, photoURL, displayName } = result.user;

    return {
      ok: true,
      uid, 
      photoURL,
      displayName,
      email,
    }

  } catch (error) {
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

export const logoutFirebase = async () => {
  return await signOut(FirebaseAuth);
}