import {
  Avatar,ButtonBase,Grid,List,ListItem,ListItemAvatar,ListItemText,Typography,Card,Accordion,AccordionSummary,AccordionDetails} from "@mui/material";
import { PROJECTS_DETAILS } from "../Utils/projectDetails";
import { ACADEMICS_DETAIL } from "../Utils/AcademicsDetails";
import React from "react";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../resources/css/AcademicsDetails.css';
function Academics() {
  return (
   
    /*<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {PROJECTS_DETAILS.map((data, index)=>(
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <InsertDriveFileIcon></InsertDriveFileIcon>
        </ListItemAvatar>
        <ListItemText
          primary={data.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                {data.date}
              </Typography>
              {data.description}
            </React.Fragment>
          }
        />
        <GitHubIcon></GitHubIcon>
      </ListItem>
      ))}      
       className="list" sx={{ width: '200%', maxWidth: '1000px' }}
      </List>*/
      <List className="list">
        {ACADEMICS_DETAIL.map((data,index)=>(
          <Card variant="outlined" sx={{ maxWidth: '800px',color:"white"}}>
          <div>  <Accordion sx={{backgroundColor:"#694273  "}}>
          <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          
          <ListItem sx={{ width: "100%",
                height: "150px",
                cursor: "pointer",
                overflow:'clip',
                
                }}alignItems="flex-start" >
        <ListItemAvatar>
          <SchoolIcon></SchoolIcon>
        </ListItemAvatar>
        <ListItemText sx={{color:"#fb6f92"}}
          primary={data.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline',color:"#b5e2fa"  }}
              >
                {data.School_name}
              </Typography >
              <br></br>
              <Typography sx={{color:"white"}}>
              {data.description}
              </Typography>
            </React.Fragment>
          }
        />
      
      </ListItem>
      </AccordionSummary>
      <AccordionDetails sx={{color:"white"}} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
      </Accordion></div>
      </Card>))}
      
      </List>
    
  );
}

export default Academics;
