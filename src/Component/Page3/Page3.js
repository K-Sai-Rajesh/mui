
import { CalendarMonth, FiberManualRecordSharp } from '@mui/icons-material'
import { List, ListItem, ListItemIcon, ListItemText, Paper, Typography,LinearProgress } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function Page3() {
  const data = [
    {
      
      id:0,
      name:"Headline",
      color:'warning',
      value:1,
      isTrue : false,
      backgroundColor:'#ffcdd2'
    },
    {
      id:1,
      name:"Tone",
      color:'success',
      value:1,
      isTrue : false,
      backgroundColor:'#80cbc4'      
    },
    {
      id:2,
      name:"Emotion",
      color:'primary',
      value:1,
      isTrue : false,
      backgroundColor:'#5c6bc0'
    },
    {
      id:3,
      name:"Plagiarism",
      color:'secondary',
      value:1,
      isTrue : false,
      backgroundColor:'#ffcdd2'
    },
    {
      id:4,
      name:"Corrections",
      color:'error',
      value:1,
      isTrue : false,
      backgroundColor:'#f48fb1'
    },
  ]
  const styles = {
    display:'flex',
    flexDirection:'row',
    justifyContent:'start',
    alignItems:'center',
    width:'100%'
  }

  function handlePaper(item){
    
  }

  return (
    <>
        <Paper elevation={0} sx={{p:3}}>
          <Typography variant='h6' sx={{textAlign:"center",color:"#FFD700",padding:'3px'}}><CalendarMonth />&ensp;Ai Analysis</Typography>
        </Paper>
        <Paper>
          <List sx={{p:4,mt:1,display:"flex",flexDirection:"column",justifyContent:"space-around",}}>
            {
              data.map(item => {
                let color = {color:item.color}

                let elevate = 0
                let backgroundcolor = null
                if(item.isTrue) {
                  elevate = 1
                  backgroundcolor = item.backgroundColor
                }

                return(
                  <Paper elevation={elevate} sx={{m:1, backgroundColor:backgroundcolor}}  onClick={() => handlePaper(item)}>
                    <ListItem sx={{
                      flexDirection:'column'
                    }}>
                    <Box sx={styles}>
                      <ListItemIcon>
                        <FiberManualRecordSharp {...color} sx={{fontSize:"medium"}} />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography variant='h5' sx={{fontWeight:"bold"}}>{item.name}</Typography>
                      </ListItemText>
                    </Box>
                    <Box sx={styles}>
                      <ListItemText sx={{pl:7}}>
                      {
                          item.id === 0 ? <Typography variant='h6'>Impact Score: </Typography> : <Typography variant='h6'>0 Alerts </Typography>
                      }
                      </ListItemText>
                    </Box>
                    <Box sx={styles}>
                      <ListItemText sx={{pl:7}}>
                        {
                          item.id === 0 ? null : <LinearProgress variant='determinate' {...color} sx={{backgroundColor:'#F5F5F5',borderRadius:"20px",padding:"4px"}} value={item.value} />
                        }
                      </ListItemText>
                    </Box>
                      </ListItem>
                      <ListItem>
                    </ListItem>
                  </Paper>
                )
              })
            }
          </List>
        </Paper>
    </>
  )
}