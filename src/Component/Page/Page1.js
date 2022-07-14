import { SaveAlt, Bookmarks,FormatBold,FormatItalic,FormatUnderlined,FormatAlignLeftRounded,FormatStrikethroughRounded,FormatAlignCenterRounded } from "@mui/icons-material";
import { Button, Grid, Paper, TextareaAutosize, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Page2 from "../Page2/Page2";
import Page3 from "../Page3/Page3";

function Page1() {
  return (
    <>
    <Grid container columnSpacing={1} rowSpacing={1} sx={{backgroundColor:'#F5F5F5',margin:'none',p:1}}>
      <Grid item xs={12} sm={12} md={4} lg={5}>
        <Paper elevation={0} sx={{ mb:1, display:'flex', direction:'row' ,p:3 }}>
          <Typography variant="h6" sx={{ pl:1,color:'gray', fontSize:'21px' }}>
            1AVDcXSE
          </Typography>
          <Box sx={{marginLeft:'auto',display:'flex',flexDirection:'row'}}>            
            <Button sx={{selfAlign:'end'}}variant="primary">
              <Bookmarks sx={{fontSize:'20px',color:'#DCDCDC'}} />
            </Button>
            <Button sx={{selfAlign:'end'}}variant="primary">
              <SaveAlt sx={{fontSize:'20px',color:'#DCDCDC'}} />
            </Button>
          </Box>
        </Paper>
        <Paper elevation={0} sx={{p:2,height:'70vh'}}>
          <TextField
            aria-label="empty textarea"
            variant="standard"
            placeholder="Headline"
            style={{ width:"100%", border:'none' }}
          />
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="content"
            style={{ width:"100%", border:'none',height:'95%' }}
          />
        </Paper>
        <Paper elevation={0} sx={{display:'flex', direction:'row', p:1,mt:1}}>
          <Box sx={{marginRight:'auto',display:'flex',flexDirection:'row',overflow:'auto'}}>
            <Button sx={{selfAlign:'start'}}variant="primary">
              <FormatBold sx={{fontSize:'20px',color:'grey'}} />
            </Button>
            <Button sx={{selfAlign:'start'}}variant="primary">
              <FormatItalic sx={{fontSize:'20px',color:'grey'}} />
            </Button>
            <Button sx={{selfAlign:'start'}}variant="primary">
              <FormatUnderlined sx={{fontSize:'20px',color:'grey'}} />
            </Button>
            <Button sx={{selfAlign:'start'}}variant="primary">
              <FormatStrikethroughRounded sx={{fontSize:'20px',color:'grey'}} />
            </Button>
            <Button sx={{selfAlign:'start'}}variant="primary">
              <FormatAlignLeftRounded sx={{fontSize:'20px',color:'grey'}} />
            </Button>
            <Button sx={{selfAlign:'start'}}variant="primary">
              <FormatAlignCenterRounded sx={{fontSize:'20px',color:'grey'}} />
            </Button>
            <Button sx={{selfAlign:'start'}}variant="primary">
              <Typography variant="h6" sx={{fontSize:'20px',color:'grey'}}>H1</Typography>
            </Button>
            <Button sx={{selfAlign:'start'}}variant="primary">
            <Typography variant="h6"  sx={{fontSize:'20px',color:'grey'}}>H2</Typography>
            </Button>
          </Box>
          <Box sx={{marginLeft:'auto',display:'flex', flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <Button variant="primary">
              <Typography variant="h6"  sx={{fontSize:'10px',color:'grey'}}>WordCount : {}</Typography>
            </Button>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Paper elevation={0} sx={{maxHeight:'100vh'}}>
            <Page2/>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={3} sx={{height:'100vh'}}>
          <Page3 />
      </Grid>
    </Grid>
    </>
  );
}

export default Page1;
