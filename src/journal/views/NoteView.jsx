import { Button, Grid, TextField, Typography } from "@mui/material"
import { SaveOutlined } from '@mui/icons-material'
import { ImageGallery } from "../components/ImageGallery"

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent="space-between" 
      alignItems="center"
      sx={{marginBotom: 1}}>
      <Grid item>
        <Typography fontSize={25} fontWeight="light">28 de agosto de 2023</Typography>
      </Grid>
      <Grid item>
        <Button color="primary" sx={{padding: 1}}>
          <SaveOutlined sx={{fontSize: 25, marginRight: 1}}/>
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField 
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Título"
          sx={{border: 'none', marginBottom: 1}}
        />
        <TextField 
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió en el día hoy?"
          sx={{border: 'none', marginBottom: 1}}
          minRows={5}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  )
}
