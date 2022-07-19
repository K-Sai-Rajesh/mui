import { Accordion, AccordionDetails, AccordionSummary, Box, Button, LinearProgress, List, ListItem, ListItemIcon, ListItemText, Paper, ThemeProvider, Typography, useMediaQuery, useTheme } from '@mui/material'
import {ExpandMore,FiberManualRecord} from '@mui/icons-material'
import React, { useState } from 'react'
import { themes } from '../../Themes/Themes';

export default function Tone() {
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    const button = [
        {
            id:0,
            color:"success",
            name:"Positive"
        },
        {
            id:1,
            color:"error",
            name:"Negative"
        }
        ,
        {
            id:2,
            color:"neutral",
            name:"Neutral"
        },
        {
            id:3,
            color:'primary',
            name:'View All'
        }
    ]
    const [progressData,setProgressData] = useState([
        {
            id:10,
            color:"success",
            name:"Positive",
            value:63,
            mcolor:'success.main'
            
        },
        {
            id:11,
            color:"error",
            name:"Negative",
            value:10,
            mcolor:'error.main'
        },
        {
            id:12,
            color:"neutral",
            name:"Neutral",
            value:27,
            mcolor:'text.secondary'
        }
    ])
    const accData = [
        {
            id:100,
            name:"top",
            panel:"panel1",
            mcolor:'success.main'
        },
        {
            id:101,
            name:"reduce",
            panel:"panel2",
            mcolor:'success.main'
        },
        {
            id:102,
            name:"travelling",
            panel:"panel3",
            mcolor:'text.secondary'
        },
        {
            id:103,
            name:"luxury",
            panel:"panel4",
            mcolor:'text.secondary'
        }
    ]
    const [accDisplay,setAccDisplay] = useState(true)
    const [dis,setDis] = useState('')
    const theme = useTheme()
    const isSm = useMediaQuery(theme.breakpoints.down('lg'))
    function handleBtnChange(item){
        setDis(item.name)
        if(item.name ==='View All'){
            setAccDisplay(true)
        }else {
            setAccDisplay(false)
        }
    }
  return (
    <ThemeProvider theme={themes}>
        <Paper elevation={0} sx={{p:3,height:'100%'}}>
            <Typography variant='h4' sx={{color:"#2bbbad",fontWeight:"600"}}>Tone</Typography>
                {
                    button.map((item)=>{
                        const variant = {variant : null,sx:{}}
                        if(item.id === 3) { 
                            let style = {fontWeight:"bolder",mx:1,my:2,borderRadius:"20px",border:"none",fontSize:"16px","&:hover":{
                                border:"none"}}
                            variant['variant'] ='text'
                            variant['sx'] = style
                        }
                        else {
                            let style = {fontWeight:"bolder",mx:1,my:2,borderRadius:"20px",border:"none",boxShadow:"1",fontSize:"16px","&:hover":{
                                border:"none"}}
                            variant['variant'] ='outlined'
                            variant['sx'] = style
                        }
                        const color = {color:item.color}
                        return(
                            <>
                               <Button key={item.id} {...variant} {...color} size="large" onClick={() => handleBtnChange(item)} >{item.name}</Button>
                            </>
                        )
                    })
                }
                <List>
                    {
                        progressData.map((pro)=>{
                            const color = {color:pro.color}
                            if(accDisplay){
                                return(
                                <>
                                <ListItem sx={{px:5,py:3}}>
                                    <ListItemText >
                                        <Typography variant='h6' sx={{fontWeight:"bold",color:`${pro.mcolor}`}}>{pro.name}<span style={{float:"right",color:`${pro.color}`}}>{pro.value}%</span></Typography>
                                        <LinearProgress variant='determinate' {...color} sx={{padding:"5px",borderRadius:"10px"}} value={pro.value}/>
                                    </ListItemText>
                                </ListItem>
                                </>
                                )
                            }
                            else{
                                return(
                                <>
                                    {
                                        dis===pro.name ?
                                        <>
                                        <ListItem sx={{px:5,py:3}}>
                                            <ListItemText >
                                                <Typography variant='h6' {...color} sx={{fontWeight:"bold",color:`${pro.mcolor}`}}>{pro.name}<span style={{float:"right",color:`${pro.color}`}}>{pro.value}%</span></Typography>
                                                <LinearProgress variant='determinate' {...color} sx={{padding:"5px",borderRadius:"10px"}} value={pro.value}/>
                                            </ListItemText>
                                        </ListItem>
                                        </>
                                        :
                                        <>
                                        </>
                                    }
                                </>
                                )
                            }
                        })
                    }
                </List>
                <Paper elevation={0} sx={{px:3}}>
                    {
                        accDisplay?
                        <>
                            {
                                accData.map(accItem => {
                            return(
                                <>
                                <div style={{
                                    marginTop:'30px',
                                }}>
                                    <Accordion key={accItem.id}  expanded={expanded === `${accItem.panel}`} onChange={handleChange(`${accItem.panel}`)}>
                                        <AccordionSummary
                                        expandIcon={<ExpandMore />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                        >
                                        {
                                            isSm ?
                                            <>
                                                <ListItem >
                                                    <ListItemIcon><FiberManualRecord sx={{color:`${accItem.mcolor}`}}/></ListItemIcon>
                                                    <ListItemText>
                                                        <Typography  sx={{fontWeight:'bold'}}>
                                                            {accItem.name}
                                                        </Typography>
                                                    </ListItemText>
                                                </ListItem>
                                            </>:<>
                                            <Typography sx={{ width: '30%', flexShrink: 0 ,fontWeight:"bolder",}}>
                                                <ListItem >
                                                    <ListItemIcon><FiberManualRecord sx={{color:`${accItem.mcolor}`}}/></ListItemIcon>
                                                    <ListItemText>
                                                        <Typography sx={{fontWeight:'bold'}} >{accItem.name}</Typography>
                                                    </ListItemText>
                                                </ListItem>
                                            </Typography>
                                            <Typography sx={{ marginLeft:"auto",fontWeight:"bold",padding:"12px 20px 0 0 " }}>See more details</Typography>
                                            </>
                                        }
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                            Aliquam eget maximus est, id dignissim quam.
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                                </>
                            )
                        })
                            }
                        </>
                        :
                        <>
                        </>
                    }
                </Paper>
        </Paper>
    </ThemeProvider>
  )
}