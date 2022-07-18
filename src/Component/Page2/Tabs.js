import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useMediaQuery, useTheme } from '@mui/material';
import { AppContext } from '../GlobalState/AppContext';
import { AIRouting } from '../AIComponents/AIRouting/AIRouting';
import Tone from '../AIComponents/Tone/Tone';

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <>
      {value === index && (
        <>
        {
          children
        }
        </>
      )}
    </>
  );
}

export default function NewTabs() {
  const [value, setValue] = React.useState(0);

  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('sm'))
  const ismd = useMediaQuery(theme.breakpoints.down('md'))
  const isLg = useMediaQuery(theme.breakpoints.down('lg'))

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const data = React.useContext(AppContext)

  let styles = {width:'50%',
          color:'grey',
        "&:focus":{
          color:'#FFD700',
          backgroundColor:'white'
        },
        "&:active":{
          color:'#FFD700',
          backgroundColor:'white'
        },
        "&:hover":{
          color:'#FFD700',
          backgroundColor:'white'
        },
        backgroundColor:'#F5F5F5'}

  if(isSm){
      styles ={width:'50%', p:3,
          color:'grey',
        "&:focus":{
          color:'#FFD700',
          backgroundColor:'white'
        },
        "&:active":{
          color:'#FFD700',
          backgroundColor:'white'
        },
        "&:hover":{
          color:'#FFD700',
          backgroundColor:'white'
        },
        backgroundColor:'#F5F5F5'}
  }
  else if(ismd){
    styles ={width:'50%', p:3,
        color:'grey',
      "&:focus":{
        color:'#FFD700',
        backgroundColor:'white'
      },
      "&:active":{
        color:'#FFD700',
        backgroundColor:'white'
      },
      "&:hover":{
        color:'#FFD700',
        backgroundColor:'white'
      },
      backgroundColor:'#F5F5F5'}
  }
  else if(isLg){
    styles ={width:'50%', p:4,
        color:'grey',
      "&:focus":{
        color:'#FFD700',
        backgroundColor:'white'
      },
      "&:active":{
        color:'#FFD700',
        backgroundColor:'white'
      },
      "&:hover":{
        color:'#FFD700',
        backgroundColor:'white'
      },
      backgroundColor:'#F5F5F5'}
  }
  else{
    styles ={width:'50%', p:5,
        color:'grey',
      "&:focus":{
        color:'#FFD700',
        backgroundColor:'white'
      },
      "&:active":{
        color:'#FFD700',
        backgroundColor:'white'
      },
      "&:hover":{
        color:'#FFD700',
        backgroundColor:'white'
      },
      backgroundColor:'#F5F5F5'}
  }

  return (
    <>
        <Tabs value={value} onChange={handleChange} TabIndicatorProps={{
          style:{
            display:'none',
            color:'grey',
            "&:focus":{
              display:'none',
              color:'grey'
            },
            "&:active":{
              display:'none',
              color:'grey'
            }
          }
        }} aria-label="basic tabs example">
          <Tab label="AI Analysis" value={0} sx={styles} onClick={() =>{
             data.setAI(true)
             data.setPA(false)
          }}/>
          <Tab label="Panel Analysis" value={1} sx={styles}  onClick={() =>{
             data.setPA(true)
             data.setAI(false)
          }}/>
        </Tabs>
        <TabPanel value={value} index={0} sx={{width:'100%',height:'100%'}}>
          {
            AIRouting()
          }
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Tone/>
        </TabPanel>
    </>
  );
}
