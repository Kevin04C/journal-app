import { Grid, Typography } from "@mui/material"
import { StarRateOutlined } from '@mui/icons-material'

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "calc(100vh - 100px)", backgroundColor: "primary.main", borderRadius: 5, textAlign: 'center' }}
    >
      <Grid item xs={12}> 
        <StarRateOutlined 
          sx={{
            fontSize: 50,
            color:"white",
          }}
        />
        <Grid item xs={12}>
          <Typography color="white" variant="p">Seleciona o crea una entrada</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
