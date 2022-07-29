import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children, title }) => {
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
        className="box-shadow"
        xs={3}
        sx={
        { 
          width: {md: 400},
          background: "white", 
          padding: 3, borderRadius: 2 
        }
      }
      >
        <Typography variant="h5" sx={{ marginBottom: 3 }}>
          {title}
        </Typography>

        {children}
      </Grid>
    </Grid>
  );
};
