import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Multiple from "../component/multiple";
import Short from "../component/short";
import Checkboxes from "../component/Checkboxes";
import Paragraph from "./../component/Paragraph";
import Date from "../component/Date";
import Dropdown from "./../component/Dropdown";
import Fileupload from "./../component/Fileupload";
import Linearscale from "./../component/Linearscale";
import Time from "../component/Time";
import Mulitplechoicegrid from "../component/Mulitplechoicegrid";
import Checkboxesgrid from "./../component/Checkboxesgrid";
import TextField from "@mui/material/TextField";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import Switch from "@mui/material/Switch";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


import ShortTextIcon from "@mui/icons-material/ShortText";
import NotesIcon from "@mui/icons-material/Notes";
import AdjustIcon from "@mui/icons-material/Adjust";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import BackupIcon from "@mui/icons-material/Backup";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import AppsIcon from "@mui/icons-material/Apps";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventIcon from "@mui/icons-material/Event";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import FeedIcon from '@mui/icons-material/Feed';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import UTurnLeftOutlinedIcon from '@mui/icons-material/UTurnLeftOutlined';
import UTurnRightOutlinedIcon from '@mui/icons-material/UTurnRightOutlined';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {deepPurple } from '@mui/material/colors';

const label = { inputProps: { "aria-label": "Switch demo" } };



//Home
export default function home() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setvalue] = React.useState(["Muliple"]);
  const [count, setcount] = React.useState(["Question : 1"]);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function seltype(type, index) {
    let inputtype = [...value];
    inputtype[index] = type;
    setvalue(inputtype);
  }
  function updatedata(e, index) {
    const input = [...count];
    input[index] = e.target.value;
    setcount(input);
  }
  function deleteQuestion(index) {
    const input = [...count];
    if(input.length>=2)
   { input.splice(index, 1);
    setcount(input);}
  }

  return (
    <div className="maincontainer">
      <div className="Navbar">
       <div className="navbarupperpart">
       <div className="navupperpartfirst">
        <div><FeedIcon fontSize="large" style={{color:"rgb(103, 58, 183)"}} /></div>
        <div>Untitled Form</div>
        <div><FolderOpenOutlinedIcon/></div>
        <div><StarBorderPurple500OutlinedIcon/></div>
       </div>
       <div className="navupperpartsecond">
        <div><PaletteOutlinedIcon/></div>
        <div><RemoveRedEyeOutlinedIcon/></div>
        <div style={{transform:"rotate(90deg)"}}><UTurnLeftOutlinedIcon/></div>
        <div style={{transform:"rotate(270deg)"}}><UTurnRightOutlinedIcon/></div>
        <div>
        <Stack direction="row" spacing={2}>
               <Button variant="contained" style={{backgroundColor:"rgb(103, 58, 183)"}}>Sent</Button>
        </Stack>
        </div>
        <div><MoreVertOutlinedIcon/></div>
        <div>
        <Stack direction="row" spacing={2}>
    
      <Avatar sx={{ bgcolor: deepPurple[500] }} style={{backgroundColor:"green"}}>R</Avatar>
    </Stack>
        </div>

       </div>
       </div>
        <div className="navupperpartthird">
           <span>Questions</span>
           <span>Responses</span>
           <span>Settings</span>
        </div>

      </div>
      <div className="container" style={{borderTop:".6rem solid rgb(103, 58, 183)", position:"relative"}}>
        <span className="borhide">&nbsp; </span>
        <div><input id="standard-basic"  autocomplete="off"  variant="standard"  type="text" name="title" placeholder="Untitled form"   className="inputStyle" style={{fontSize:"1.9rem" ,width:"100%"}} />
        <span className="inputline"  style={{top:"0rem",left:"-1.7rem" ,width:"100%"}}></span>
        </div>
        <div> <input type="text" name="subtitle" id="subtitle" placeholder="form description"   autocomplete="off"  className="inputStyle" style={{fontSize:"1rem",width:"100%"}} />
        <span className="inputline"  style={{top:"0rem",left:"-1.7rem",width:"100%"}}></span>
        </div>
      </div>
      {count.map((data, index) => {
        return (
          <>
            <div key={index} className="container">
              <div className="subcontainer">
                <div className="firstchild">
                  <TextField
                    id="standard-basic"  variant="standard"
                    style={{fontSize:"1.5rem"}}
                    multiline
                    autocomplete="off"
                    value={data}
                    className="textarea"
                    onChange={(e) => {
                      updatedata(e, index);
                    }}
                  />
                </div>

                <div className="secondchild">
                  <InsertPhotoOutlinedIcon className="insertphoto" />
                </div>
                <div className="thirdtchild">
                  <Button
                    id="demo-positioned-button"
                    aria-controls={open ? "demo-positioned-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    select type &nbsp; <ArrowDropDownCircleIcon/>
                  </Button>
                  <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <div
                        onClick={() => {
                          seltype("Short", index);
                        }}
                      >
                        <ShortTextIcon />
                        <span className="inputalign">Short answer</span>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <div
                        onClick={() => {
                          seltype("Paragraph", index);
                        }}
                      >
                        <NotesIcon />
                        <span className="inputalign">Paragraph</span>
                      </div>
                    </MenuItem>
                    <hr />
                    <MenuItem onClick={handleClose}>
                      <div
                        onClick={(e) => {
                          seltype("Multiple", index);
                        }}
                      >
                        <AdjustIcon />
                        <span className="inputalign">Multiple choice</span>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <div
                        onClick={() => {
                          seltype("Checkboxes", index);
                        }}
                      >
                        <CheckBoxIcon />
                        <span className="inputalign">Checkboxes</span>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <div
                        onClick={() => {
                          seltype("Dropdown", index);
                        }}
                      >
                        <ArrowDropDownCircleIcon />
                        <span className="inputalign">Dropdown</span>
                      </div>
                    </MenuItem>
                    <hr />
                    <MenuItem onClick={handleClose}>
                      <div
                        onClick={() => {
                          seltype("Fileupload", index);
                        }}
                      >
                        <BackupIcon />
                        <span className="inputalign">File upload</span>
                      </div>
                    </MenuItem>
                    <hr />
                    <MenuItem onClick={handleClose}>
                      <div
                        onClick={() => {
                          seltype("Linearscale", index);
                        }}
                      >
                        <LinearScaleIcon />
                        <span className="inputalign">Linear scale</span>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <div
                        onClick={() => {
                          seltype("Mulitplechoicegrid", index);
                        }}
                      >
                        <GridViewRoundedIcon />
                        <span className="inputalign">Mulitple choice grid</span>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <div
                        onClick={() => {
                          seltype("Checkboxesgrid", index);
                        }}
                      >
                        <AppsIcon />
                        <span className="inputalign">Checkboxes grid</span>
                      </div>
                    </MenuItem>
                    <hr />
                    <MenuItem onClick={handleClose}>
                      <div
                        onClick={() => {
                          seltype("Date", index);
                        }}
                      >
                        <EventIcon />
                        <span className="inputalign"> Date</span>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <div
                        onClick={() => {
                          seltype("Time", index);
                        }}
                      >
                        <AccessTimeIcon />
                        <span className="inputalign">Time</span>
                      </div>
                    </MenuItem>
                  </Menu>
                </div>
              </div>
              {value[index] == "Multiple" ? <Multiple /> : ""}
              {value[index] == "Short" ? <Short /> : ""}
              {value[index] == "Paragraph" ? <Paragraph /> : ""}
              {value[index] == "Checkboxes" ? <Checkboxes /> : ""}
              {value[index] == "Dropdown" ? <Dropdown /> : ""}
              {value[index] == "Fileupload" ? <Fileupload /> : ""}
              {value[index] == "Linearscale" ? <Linearscale /> : ""}
              {value[index] == "Mulitplechoicegrid" ? (
                <Mulitplechoicegrid />
              ) : (
                ""
              )}
              {value[index] == "Checkboxesgrid" ? <Checkboxesgrid /> : ""}
              {value[index] == "Date" ? <Date /> : ""}
              {value[index] == "Time" ? <Time /> : ""}
              <hr
                style={{
                  height: "0rem",
                }}
              />
              <div className="Footer">
                <div className="Footerchild">
                  <span className="footmargin" onClick={() => {
                    const indata= [...count]
                    indata[index+1]=indata[index]

          setcount(indata);
        }}>
                    <ContentCopyOutlinedIcon />
                  </span>
                  <span
                    className="footmargin"
                    onClick={() => {
                      deleteQuestion(index);
                    }}
                  >
                    <DeleteForeverOutlinedIcon />
                  </span>

                  <span
                    className="inputalign footmargin"
                    style={{ fontSize: "1.4rem", color: "grey" }}
                  >
                    |
                  </span>
                  <span className="inputalign footmargin">
                    Required <Switch {...label} />
                  </span>
                  <span className="footmargin">
                    <MoreVertOutlinedIcon />
                  </span>
                </div>
              </div>
            </div>
          </>
        );
      })}
      <div
        className="Sideicon"
        onClick={() => {
          setcount([...count, `Question : ${count.length + 1}`]);
        }}
        style={{ textAlign: "center", marginTop: "2rem" }}
      >
        
        <Tooltip title="Add option">
      <IconButton>
      <AddCircleOutlineIcon />
      </IconButton>
    </Tooltip>
      </div>
    </div>
  );
}
