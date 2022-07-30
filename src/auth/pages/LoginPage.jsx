import { EmailOutlined, Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { AuthLayout } from "../layout/AuthLayout";
import { checkingAuthentication, startGoogleSingIn } from '../../../store/auth/thunks'

export const LoginPage = () => {

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: "kevin@google.com",
    password: "123456",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(checkingAuthentication(email, password));
    console.log({email, password});
  }

  const onGoogleSingIn = () => {

    dispatch(startGoogleSingIn())
    console.log("onGoogleSingIn");

  }



  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
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
          <Grid item xs={12}>
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

        <Grid container spacing={2} sx={{ marginTop: 1 }}>
          <Grid item xs={12} md={6}>
            <Button  type="submit" variant="contained" fullWidth>
              <Typography>LOGIN</Typography>
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button onClick={onGoogleSingIn} variant="contained" fullWidth>
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
