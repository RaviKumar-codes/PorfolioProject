import React from "react";
import "../resources/css/home.css";
import { Avatar, Typography } from "@mui/material";
import { userProfileDefaultData } from "../Utils/Constants";
import dpImage from "../resources/images/dpImage.jpeg";
import { Description } from "@mui/icons-material";
import Typewriter from 'typewriter-effect';
function Home() {
  const userName = userProfileDefaultData.Name;
  // const Description= userProfileDefaultData.Description;
  return (
    <div className="mainContainer">
      <Typography variant="h5" sx={{alignSelf:'center',transform: 'translateY(100px)'}}>I'm</Typography>
      <Avatar
        src={dpImage}
        sx={{ width: "200px", height: "200px", border:"5px solid #a79248",borgerRadius:'10%', alignSelf:'flex-end' }}
      />
      
      <Typography variant="h1" sx={{ textAlign: 'center',transform: 'translateY(-100px)',color: "#3a0ca3"}}>
        {userName} 
        <br></br>
        </Typography>
        {/* <Typography variant="h3" sx={{}}>
        /* {Description} 
        
      </Typography> */}
   <div className="typewriter">
      <Typewriter
        options={{
          strings: ["I'M Student"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>

      <Typography variant="h5" sx={{textAlign:'center', m:'50px', mt:'px'}}>
      "I’m a computer science student with a passion for programming, particularly 
      in languages like C, C++, and Java.My interest in programming stems from my love 
      for problem-solving and building innovative digital solutions.
      Beyond coding, I’m an avid sports enthusiast, loving football and cricket.
      </Typography>

      {/* </Avatar> */}
    </div>
  );
}

export default Home;
