import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout"

export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
       <form>
        <Grid container>
          <Grid item xs={12} sx={{marginBottom: 2}}>
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
        
        <Grid container spacing={2} sx={{marginTop: 1}}>
          <Grid item xs={12} md={6}>
            <Button variant="contained" fullWidth>
              <Typography>LOGIN</Typography>
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button variant="contained" fullWidth>
              <Google />
              <Typography sx={{marginLeft: 1}}>Google</Typography>
            </Button>
          </Grid>
          <Grid 
            container 
            direction="row" 
            justifyContent="end"
            sx={{marginTop: 2}} 
          >
            <Link  component={ RouterLink } color="inherit" to="/auth/register">Crear una cuenta</Link>
          </Grid>
        </Grid>

      </form>
    </AuthLayout>
  )
}
