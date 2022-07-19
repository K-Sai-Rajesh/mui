import * as React from 'react';
import NewTabs from './Tabs';
import { AppContext } from '../GlobalState/AppContext';
import Tone from '../AIComponents/Tone/Tone';

export default function Page2() {

  const data = React.useContext(AppContext)

  function Components(){
    if(data.Tone) return <Tone />
    else return <NewTabs />
  }

  return (
    <>
    {
      Components()
    }
    </>
  );
}
