import { registerWithEmailPassword, singInGoogle, loginWithEmailPassword, logoutFirebase } from "../../src/firebase/providers"
import { clearNoteLogout } from "../journal/journalSlice"
import { chekingCredentials, login, logout } from "./authSlice"


export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(chekingCredentials())
  }
}

export const startGoogleSingIn = () => {
  return async (dispatch) => {
    dispatch(chekingCredentials())
    
    const result = await singInGoogle();

    if( !result.ok ) return dispatch( logout( result ) );

    dispatch(login(result))
    
  }
}

export const startCreatingUserWithEmailPassword = ({displayName, email, password}) => {
  return async (dispatch) => {
    dispatch(chekingCredentials())
    
    const result = await registerWithEmailPassword({displayName, email, password});

    if( !result.ok ) {
      return dispatch( logout( result ))
    };

    dispatch(login(result));

  }
}

export const startLoginWithEmailPassword = ({email, password}) => {
  return async (dispatch) => {
    dispatch(chekingCredentials());

    const result = await loginWithEmailPassword(email, password);

    if(!result.ok) return dispatch(logout(result))

    dispatch(login(result));

  } 
}

export const startLogout = () => {
  return async (dispatch) => {

    await logoutFirebase()
    dispatch(clearNoteLogout())
    dispatch(logout())

  }

}



