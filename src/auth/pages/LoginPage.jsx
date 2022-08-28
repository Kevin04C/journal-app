import { EmailOutlined, Google } from "@mui/icons-material";
import { Alert, Button, Grid, imageListClasses, Link, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { AuthLayout } from "../layout/AuthLayout";
import { startGoogleSingIn,startLoginWithEmailPassword } from '../../../store/auth/thunks'
import { useMemo } from "react";


const formData = {
  email: "",
  password: "",
}

export const LoginPage = () => {

 const { status, errorMessage } =  useSelector(state => state.auth);

  const dispatch = useDispatch();

  const { email, password, onInputChange, formState } = useForm(formData);


  const onSubmit = (e) => {
    e.preventDefault();
    
    if([email, password].includes("")) return;

    dispatch(startLoginWithEmailPassword(formState))

  }

  const onGoogleSingIn = () => {
    dispatch(startGoogleSingIn())
  }
  
  const isChekingAuthenticated = useMemo(() =>  "checking" === status, [status])

  return (
    <AuthLayout title="Login">
      <form 
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"      
      >
        <Grid container>
          <Grid item xs={12} sx={{ marginBottom: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@correo.com"
              fullWidth
              value={email}
              name="email"
              onChange={onInputChange}
            />
          </Grid>
          <Grid 
            item 
            xs={12}
            sx={{marginBottom: 2}}
          >
            <TextField
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              value={password}
              name="password"
              onChange={onInputChange}
            />
          </Grid>
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

        <Grid container spacing={2} sx={{ marginTop: 1 }}>
          <Grid item xs={12} md={6}>
            <Button 
              type="submit" 
              variant="contained" 
              fullWidth
              disabled={isChekingAuthenticated}
            >
              <Typography>LOGIN</Typography>
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button 
              onClick={onGoogleSingIn} 
              variant="contained" 
              fullWidth
              disabled={isChekingAuthenticated}
            >
              <Google />
              <Typography sx={{ marginLeft: 1 }}>Google</Typography>
            </Button>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="end"
            sx={{ marginTop: 2 }}
          >
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
