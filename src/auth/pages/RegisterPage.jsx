import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear Cuenta">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ marginBottom: 2 }}>
            <TextField
              label="Nombre"
              type="text"
              placeholder="Nombre completo"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@correo.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ marginTop: 1 }}>
          <Grid item xs={12}>
            <Button variant="contained" fullWidth>
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
