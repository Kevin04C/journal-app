import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
  } catch (err) {
    const errorMessage = err.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};
