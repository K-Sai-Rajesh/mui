import { SaveAlt, Bookmarks } from "@mui/icons-material";
import { Button, Grid, Paper, TextareaAutosize, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Page1() {
  return (
    <>
    <Grid container rowSpacing={2} columnSpacing={2} sx={{backgroundColor:'#F5F5F5',p:2}}>
      <Grid item xs={12} sm={12} md={5} lg={5}>
        <Paper elevation={0} sx={{ p:2, mb:1, display:'flex', direction:'row', alignItems:'center' }}>
          <Typography variant="h6" sx={{ color:'gray', fontSize:'25px' }}>
            1AVDcXSE
          </Typography>
          <Box sx={{marginLeft:'auto'}}>
            <Button sx={{selfAlign:'end'}}variant="primary">
              <Bookmarks sx={{fontSize:'20px',color:'#DCDCDC'}} />
            </Button>
            <Button sx={{selfAlign:'end'}}variant="primary">
              <SaveAlt sx={{fontSize:'20px',color:'#DCDCDC'}} />
            </Button>
          </Box>
        </Paper>
        <Paper elevation={2} sx={{p:2,height:'87vh'}}>
          <TextField
            aria-label="empty textarea"
            variant="standard"
            placeholder="Headline"
            style={{ width:"100%", border:'none', resize:'none' }}
          />
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="content"
            style={{ width:"100%", height:'83vh', border:'none', resize:'none' }}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Paper elevation={0} variant='outlined' sx={{p:2}}>
            <Typography>
              Hello
            </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={3}>
        <Paper elevation={0} sx={{p:2}}>
          <Typography>
            Hello
          </Typography>
        </Paper>
      </Grid>
    </Grid>
    </>
  );
}

export default Page1;
