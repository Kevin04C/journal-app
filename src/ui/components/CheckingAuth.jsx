import  { Grid } from "@mui/material"
import { Spinner } from "./Spinner"


export const CheckingAuth = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid
        item
        xs={3}
        sx={{width: {md: 400, textAlign:"center"}}}
      >
        <Spinner />
      </Grid>
    </Grid>
  )
}
