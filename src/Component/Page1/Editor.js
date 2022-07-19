import React from "react";
import "./editor.css";
import { Editor } from "@tinymce/tinymce-react";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Bookmarks, SaveAlt } from "@mui/icons-material"

class Eeditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(content, editor) {
    this.setState({ content });
  }
  handleSubmit(event) {
    alert("Text was submitted: " + this.state.content);
    event.preventDefault();
  }
  render() {
    return (
        <>
            <Paper elevation={0} sx={{ display:'flex', direction:'row',mb:1}}>
                <Typography variant="h6" sx={{ pl:1,color:'gray', fontSize:'21px',p:2 }}>
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
            <Paper elevation={0}>
                <TextField
                aria-label="empty textarea"
                variant="standard"
                placeholder="Headline"
                style={{ width:"100%", border:'none',padding:'10px'
                    }}
                />
            </Paper>
            <Editor
            value={this.state.content}
            init={{
                height: "85%",
                menubar: false,
                block_formats: 'Paragraph=p;Heading 2=h2;Heading 3=h3;Heading 4=h4;',
                toolbar_location: "bottom"
            }}
            onEditorChange={this.handleChange}
            />
        </>
    );
  }
}
export default Eeditor;