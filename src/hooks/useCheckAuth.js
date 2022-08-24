import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/auth/authSlice";
import { FirebaseAuth } from "../firebase/config";

export const useCheckAuth = () => {

  const { status } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (user) => {
      if (!user) return dispatch(logout({}));

      const { uid, displayName, email, photoURL } = user;

      dispatch(login({ uid, displayName, email, photoURL }));
    });
    
  }, []);

  return status

};
