import { createContext, useEffect, useState } from "react";

export const AppContext = createContext()

export const AppState = (props) => {

    const [AI,setAI] = useState(true)
    const [PA,setPA] = useState(false)
    const [Headline,setHeadline] = useState(false)
    const [Tone,setTone] = useState(false)
    const [Emotion,setEmotion] = useState(false)
    const [Plagiarism,setPlagiarism] = useState(false)
    const [Corrections,setCorrections] = useState(false)

    useEffect(()=>{

    },[AI,PA])

    return(
        <AppContext.Provider value={{AI,PA,Headline,Tone,Emotion,Plagiarism,Corrections,setHeadline,setAI,setPA,setTone,setCorrections,setEmotion,setPlagiarism}}>
            {
                props.children
            }
        </AppContext.Provider>
    )
}