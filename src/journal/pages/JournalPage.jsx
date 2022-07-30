import { AddOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views/'


export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <NothingSelectedView /> */}
      <NoteView />

      <IconButton
        size='large'
        sx={{
          backgroundColor: 'error.main',
          ':hover': {
            backgroundColor: 'error.main',
            opacity: 0.9
          },
          color:"white",
          position: 'fixed',
          right: 40,
          bottom: 20,
        }}
      >
        <AddOutlined sx={{fontSize: 25}}/>
      </IconButton>
    </JournalLayout>
  )
}
