import { createContext, useEffect, useState } from "react";

export const AppContext = createContext()

export const AppState = (props) => {

    const [AI,setAI] = useState(false)
    const [PA,setPA] = useState(false)
    const [heading,setHeading] = useState(true)

    useEffect(()=>{

    },[AI,PA])

    return(
        <AppContext.Provider value={{AI,PA,heading,setHeading,setAI,setPA}}>
            {
                props.children
            }
        </AppContext.Provider>
    )
}