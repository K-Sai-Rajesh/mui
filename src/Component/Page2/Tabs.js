import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Paper, useMediaQuery, useTheme } from '@mui/material';
import { AppContext } from '../GlobalState/AppContext';
import { AIRouting } from '../AIComponents/AIRouting/AIRouting';
import nodata from '../Images/nodata.webp'

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

  let styles = {
    width: '50%',
    color: 'grey',
    "&:focus": {
      color: '#FFD700',
      backgroundColor: 'white'
    },
    "&:hover": {
      color: '#FFD700',
      backgroundColor: 'white'
    },
    backgroundColor: '#F5F5F5'
  }


  const tabs= {
    "& .MuiTabs-indicator": {
      backgroundColor: "orange",
      height: 3,
    },
    "& .MuiTab-root.Mui-selected": {
      color: '#ffd700',
      backgroundColor: 'white'
    }
  }


  if (isSm) {
    styles = {
      width: '50%', p: 3,
      color: 'grey',
      "&:focus": {
        color: '#FFD700',
        backgroundColor: 'white'
      },
      "&:active": {
        color: '#FFD700',
        backgroundColor: 'white'
      },
      "&:hover": {
        color: '#FFD700',
        backgroundColor: 'white'
      },
      backgroundColor: '#F5F5F5'
    }
  }
  else if (ismd) {
    styles = {
      width: '50%', p: 3,
      color: 'grey',
      "&:focus": {
        color: '#FFD700',
        backgroundColor: 'white'
      },
      "&:active": {
        color: '#FFD700',
        backgroundColor: 'white'
      },
      "&:hover": {
        color: '#FFD700',
        backgroundColor: 'white'
      },
      backgroundColor: '#F5F5F5'
    }
  }
  else if (isLg) {
    styles = {
      width: '50%', p: 3,
      color: 'grey',
      "&:focus": {
        color: '#FFD700',
        backgroundColor: 'white'
      },
      "&:active": {
        color: '#FFD700',
        backgroundColor: 'white'
      },
      "&:hover": {
        color: '#FFD700',
        backgroundColor: 'white'
      },
      backgroundColor: '#F5F5F5'
    }
  }
  else {
    styles = {
      width: '50%', p:4,
      color: 'grey',
      "&:focus": {
        color: '#FFD700',
        backgroundColor: 'white'
      },
      "&:active": {
        color: '#FFD700',
        backgroundColor: 'white'
      },
      "&:hover": {
        color: '#FFD700',
        backgroundColor: 'white'
      },
      backgroundColor: '#F5F5F5'
    }
  }

  return (
    <Paper elevation={0} sx={{ height: '100%' }}>
      <Tabs value={value} sx={tabs} onChange={handleChange}
        TabIndicatorProps={{
          style: {
            backgroundColor: 'white'
          }
        }}
        aria-label="basic tabs example">
        <Tab label="AI Analysis" value={0} sx={styles} onClick={() => {
          data.setAI(true)
          data.setPA(false)
        }} />
        <Tab label="Panel Analysis" value={1} sx={styles} onClick={() => {
          data.setPA(true)
          data.setAI(false)
        }} />
      </Tabs>
      <TabPanel value={value} index={0} sx={{ width: '100%', height: '100%' }}>
        {
          AIRouting()
        }
      </TabPanel>
      <TabPanel value={value} index={1}>
        <img src={nodata} alt='nodata' className='w-100' style={{marginTop:'100px'}} />
      </TabPanel>
    </Paper>
  );
}
