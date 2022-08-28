import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from "../../hooks/useForm";
import { AuthLayout } from "../layout/AuthLayout"
import { useDispatch } from 'react-redux'
import { startCreatingUserWithEmailPassword } from "../../../store/auth/thunks";
import { useSelector } from 'react-redux'
import { useMemo } from "react";

const formData = {
  email: "",
  password: "",
  displayName: ""
}

const formValiations = {
  email: [ (value) => value.includes("@"), "El correo debe tener una @"],
  password: [ (value) => value.length >= 6, "La contraseña debe tener más de 6 caracteres"],
  displayName: [ (value) => value.length >= 1, "El nombre el obligatorio"],

}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector(store => store.auth)
  
  const { 
    formState,displayName,email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValiations);

  const [formSubmited, setFormSubmited] = useState(false)

  const isChekingAutheticated = useMemo(() => status === 'checking', [status]);
  
  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmited(true)

    if(!isFormValid) return;
    
    dispatch(startCreatingUserWithEmailPassword(formState))

  }

  return (
    <AuthLayout title="Crear Cuenta">
      <form 
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid item xs={12} sx={{ marginBottom: 2 }}>
            <TextField
              label="Nombre"
              type="text"
              placeholder="Nombre completo"
              fullWidth
              autoComplete="off"
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmited}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@correo.com"
              fullWidth
              autoComplete="off"
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmited}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{marginBottom: 2}}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              autoComplete="off"
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmited}
              helperText={passwordValid}
            />
          </Grid>
          <Grid 
            item 
            xs={12}
            display={!!errorMessage ? '' : 'none'}
          >
            <Alert
              severity="error"
            >
              {errorMessage}
            </Alert>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ marginTop: 1 }}>
          <Grid item xs={12}>
            <Button 
              variant="contained" 
              fullWidth 
              type="submit"
              disabled={isChekingAutheticated}
            >
              <Typography>Crear Cuenta</Typography>
            </Button>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="end"
            sx={{ marginTop: 2 }}
          >
            <Typography sx={{mr: 1}}>¿Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
