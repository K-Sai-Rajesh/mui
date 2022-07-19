import { Grid  } from "@mui/material";
import Page1  from "../Page1/Page1";
import Page2 from "../Page2/Page2";
import Page3 from "../Page3/Page3";

export function Page() {

  return (
    <>
    <Grid container rowSpacing={1} columnSpacing={1} sx={{ p:2, height:"100vh"}}>      
      <Grid item xs={12} sm={12} md={4} lg={5} sx={{height:'100%'}}>
        <Page1 />
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} sx={{height:'100%'}}>
          <Page2/>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={3} sx={{height:'100%'}}>
          <Page3 />
      </Grid>
    </Grid>
    </>
  );
}

export default Page1;
