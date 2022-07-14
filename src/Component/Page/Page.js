import { Grid, Paper } from "@mui/material";
import Page1  from "../Page1/Page1";
import Page2 from "../Page2/Page2";
import Page3 from "../Page3/Page3";

export function Page() {
  return (
    <>
    <Grid container columnSpacing={1} rowSpacing={1} sx={{backgroundColor:'#F5F5F5',margin:'none',p:1}}>      
      <Grid item xs={12} sm={12} md={4} lg={5}>
        <Page1/>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Paper elevation={0}>
            <Page2/>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={3}>
          <Page3 />
      </Grid>
    </Grid>
    </>
  );
}

export default Page1;
