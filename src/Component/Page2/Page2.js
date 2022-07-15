import * as React from 'react';
import Box from '@mui/material/Box';
import NewTabs from './Tabs';
import Default from '../AIComponents/Default/Default';
import { AppContext } from '../GlobalState/AppContext';


export default function Page2() {

  const data = React.useContext(AppContext)
  console.log(data)

  return (
    <>
      <Box sx={{ width: '100%', height:'100%' }}>
        {
          data.AI ? 
          <NewTabs />
          :
          <Default/>
        }
      </Box>
    </>
  );
}
