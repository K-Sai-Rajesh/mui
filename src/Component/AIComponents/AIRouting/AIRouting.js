import { useContext } from 'react'
import { AppContext } from '../../GlobalState/AppContext'
import nodata from '../../Images/nodata.webp'
import Correction from '../Correction/Correction'
import Emotion from '../Emotions/Emotions'
import { Headline } from '../Headlines/Headline'

export function AIRouting(){

    const gstate = useContext(AppContext)

    function Components(){
        if(gstate.AI){
            if(gstate.Headline) return(<Headline/>)
            else if(gstate.Corrections) return(<Correction/>)
            else if(gstate.Emotion) return(<Emotion />)
            else return(<img src={nodata} alt='noda' className='w-100' />)
        }
    }

    return(
        <>
       {
        Components()
       }
        </>
    )
}