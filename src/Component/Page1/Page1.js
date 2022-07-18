import { Bookmarks, FormatAlignCenterRounded, FormatAlignLeftRounded, FormatBold, FormatItalic, FormatStrikethroughRounded, FormatUnderlined, SaveAlt } from "@mui/icons-material"
import { Button, Paper, TextareaAutosize, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"

export default function Page1(){
    return(
        <Box>
            <Paper elevation={0} sx={{ mb:1, display:'flex', direction:'row' ,p:3 }}>
            <Typography variant="h6" sx={{ pl:1,color:'gray', fontSize:'21px' }}>
                1AVDcXSE
            </Typography>
             
            <Box sx={{marginLeft:'auto',display:'flex',flexDirection:'row'}}>            
                <Button sx={{selfAlign:'end'}}variant="primary">
                <Bookmarks sx={{fontSize:'20px',color:'#DCDCDC'}} />
                </Button>
                <Button sx={{selfAlign:'end'}}variant="primary">
                <SaveAlt sx={{fontSize:'20px',color:'#DCDCDC'}} />
                </Button>
            </Box>
            </Paper>

            <Paper elevation={0} sx={{p:2,height:'70vh'}}>
            <TextField
                aria-label="empty textarea"
                variant="standard"
                placeholder="Headline"
                style={{ width:"100%", border:'none' }}
            />
            <TextareaAutosize
                aria-label="empty textarea"
                placeholder="content"
                style={{ width:"100%", border:'none' }}
            />
            </Paper>

            <Paper elevation={0} sx={{display:'flex', direction:'row', p:1}}>
            <Box sx={{marginRight:'auto',display:'flex',flexDirection:'row',overflow:'auto'}}>
                <Button sx={{selfAlign:'start'}}variant="primary">
                <FormatBold sx={{fontSize:'20px',color:'grey'}} />
                </Button>
                <Button sx={{selfAlign:'start'}}variant="primary">
                <FormatItalic sx={{fontSize:'20px',color:'grey'}} />
                </Button>
                <Button sx={{selfAlign:'start'}}variant="primary">
                <FormatUnderlined sx={{fontSize:'20px',color:'grey'}} />
                </Button>
                <Button sx={{selfAlign:'start'}}variant="primary">
                <FormatStrikethroughRounded sx={{fontSize:'20px',color:'grey'}} />
                </Button>
                <Button sx={{selfAlign:'start'}}variant="primary">
                <FormatAlignLeftRounded sx={{fontSize:'20px',color:'grey'}} />
                </Button>
                <Button sx={{selfAlign:'start'}}variant="primary">
                <FormatAlignCenterRounded sx={{fontSize:'20px',color:'grey'}} />
                </Button>
                <Button sx={{selfAlign:'start'}}variant="primary">
                <Typography variant="h6" sx={{fontSize:'20px',color:'grey'}}>H1</Typography>
                </Button>
                <Button sx={{selfAlign:'start'}}variant="primary">
                <Typography variant="h6"  sx={{fontSize:'20px',color:'grey'}}>H2</Typography>
                </Button>
            </Box>
            <Box sx={{marginLeft:'auto',display:'flex', flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Button variant="primary">
                    <Typography variant="h6"  sx={{fontSize:'10px',color:'grey'}}>WordCount : {}</Typography>
                </Button>
            </Box>
            </Paper>
        </Box>
    )
}