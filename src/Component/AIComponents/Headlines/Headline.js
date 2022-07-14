import { FiberManualRecordSharp } from '@mui/icons-material'
import { List, ListItem, ListItemIcon, ListItemText, Paper, Typography,LinearProgress } from '@mui/material'
import { Box } from '@mui/system'

export function Headline(){

    const styles = {
        display:'flex',
        flexDirection:'row',
        justifyContent:'start',
        alignItems:'center',
        width:'100%'
      }
    return(
        <>
         <Paper elevation={0}>
                 <ListItem  sx={{
                      flexDirection:'column'
                    }}>
                    <Box sx={styles}>
                      <ListItemText sx={{fontWeight:"bolder"}}>
                        <Typography variant='h5' sx={{fontWeight:"bold",color:'orange'}}>Headline</Typography>
                      </ListItemText>
                    </Box>
                    <Box sx={styles}>
                      <ListItemText>
                        <Typography variant='h6' sx={{fontSize:'12px',fontWeight:'bold'}} >Sentence Length</Typography>
                      </ListItemText>
                      <ListItemText>
                        <Typography variant='h6' sx={{color:'green',fontSize:'10px',fontWeight:'bold',textAlign:'right'}} >Good</Typography>
                      </ListItemText>
                    </Box>
                    <Box sx={styles}>
                      <ListItemText>
                        <LinearProgress variant='determinate' color='success' sx={{backgroundColor:'#F5F5F5',borderRadius:"20px",padding:"4px"}} value={50} />
                      </ListItemText>
                    </Box>
                    <Box sx={styles}>
                      <ListItemText>
                        <Typography variant='h5' sx={{fontSize:'10px',fontWeight:"bold",color:'lightgrey'}}>new</Typography>
                      </ListItemText>
                    </Box>
                 </ListItem>
         </Paper>
         <Paper elevation={1} sx={{m:2,}}>
           <ListItem  sx={{
                      flexDirection:'column'
            }}>
              <Box sx={styles}>
                <ListItemText>
                  <Typography variant='h6' sx={{fontSize:'12px',fontWeight:"bold",color:'orange'}}>Impact Score : 78</Typography>
                </ListItemText>
                <Box>
                  <ListItemIcon>
                 <FiberManualRecordSharp sx={{fontSize:"medium"}} />
                </ListItemIcon>
                 </Box>
                </Box>
                <Box sx={styles}>
                  <ListItemText>
                   <LinearProgress variant='determinate' color='success' sx={{backgroundColor:'#F5F5F5',borderRadius:"20px",padding:"4px"}} value={50} />
                  </ListItemText>
                </Box>
           </ListItem>
         </Paper>
        </>
    )
}