import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { DeleteOutline, SaveOutlined, UploadFileOutlined } from '@mui/icons-material'
import { ImageGallery } from "../components/ImageGallery"
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "../../hooks/useForm"
import { useEffect, useMemo } from "react"
import { setActiveNote } from "../../../store/journal/journalSlice"
import { startDeleteNote, startUpdatingNote, startUploadingFiles } from "../../../store/journal/thunks"
import Swal from 'sweetalert2'
import "sweetalert2/dist/sweetalert2.css"
import { useRef } from "react"

export const NoteView = () => {

  const dispatch = useDispatch();

  const { active:note, messageSave, isSaving } = useSelector(state => state.journal);
  const { body, title, date, onInputChange, formState } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date).toLocaleDateString("es-US", {
      day: "numeric",
      month: "long",
      year: "numeric"
    })  
    return  newDate;
  }, [date])

  const fileInputRef = useRef()

  useEffect(() => {

    dispatch(setActiveNote(formState))
  
  }, [formState])

  useEffect(() => {
    if(messageSave.length > 0) {
      Swal.fire("Nota Actualizada", messageSave, "success")
    }  
  }, [messageSave])
  

  
  const onSaveNote = () => {
    dispatch(startUpdatingNote())
  }

  const onDelete = () => {
    Swal.fire({
      title: 'Esta seguro que deseas eliminar?',
      text: "¡Esta acción no se puede revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(startDeleteNote())
        Swal.fire(
          'Eliminado!',
          'La nota ha sido eliminada :)',
          'success'
        )
      }
    })
  }

  const onFileInputChange = ({target}) => {
    if(target.file === 0) return

    dispatch(startUploadingFiles(target.files))
  }


  return (
    <Grid container direction='row' justifyContent="space-between" 
      alignItems="center"
      sx={{marginBotom: 1}}>
      <Grid item>
        <Typography fontSize={25} fontWeight="light">{dateString}</Typography>
      </Grid>
      
      <Grid item>
        <input 
          type="file"
          multiple
          accept="image/*"
          onChange={onFileInputChange}
          style={{display:"none"}}
          ref={fileInputRef}
        />

        <IconButton
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
        >
          <UploadFileOutlined 
            color="primary"
          />
        </IconButton>

        <Button 
          color="primary" 
          sx={{padding: 1}}
          disabled={isSaving}
          onClick={onSaveNote}
          >
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
          name="title"
          value={title}
          onChange={onInputChange}          
        />
        <TextField 
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió en el día hoy?"
          sx={{border: 'none', marginBottom: 1}}
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}          

        />
      </Grid>
      <Grid
        container
        justifyContent="end"
      >
        <Button
          color="error"
          sx={{mt:1}}
          onClick={onDelete}
        >
          <DeleteOutline />
        </Button>
      </Grid>

      <ImageGallery 
        images={note.imageUrls}
      />
    </Grid>
  )
}
