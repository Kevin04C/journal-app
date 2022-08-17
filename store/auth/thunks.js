import { singInGoogle } from "../../src/firebase/providers"
import { chekingCredentials, login, logout } from "./authSlice"


export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(chekingCredentials())
  }
}

export const startGoogleSingIn = () => {
  return async (dispatch) => {
    dispatch(chekingCredentials())
    
    const result = await singInGoogle();

    if( !result.ok ) return dispatch( logout( result.errorMessage ) );

    dispatch(login(result))
    
  }
}
