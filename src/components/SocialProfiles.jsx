import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../resources/css/home.css";

import { Box, Typography } from "@mui/material";

const SocialProfile = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 5,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt: 5,
        height:500,
        
      }}
    >
      <Typography variant="h3" sx={{ fontFamily: '"Pacifico", cursive',color:'#05fd64' }}>
        Connect with me...
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 4,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <a
          href="https://github.com/Ravi-Kumar/FirstRepo.git"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <GitHubIcon sx={{ cursor: "pointer", color: "#fef9ef", fontSize: 60 }} />
          <Typography sx={{ cursor: "pointer", color: "#fef9ef" }}>
            GitHub
          </Typography>
        </a>

        <a href="#Facebook" target="_blank" rel="noopener noreferrer">
          <FacebookIcon
            sx={{ cursor: "pointer", color: "#fef9ef", fontSize: 60 }}
          />
           <Typography sx={{ cursor: "pointer", color: "#fef9ef" }}>
            Facebook
          </Typography>
        </a>

        <a href="#Instagram" target="_blank" rel="noopener noreferrer">
          <InstagramIcon
            sx={{ cursor: "pointer", color: "#fef9ef", fontSize: 60 }}
          />
           <Typography sx={{ cursor: "pointer", color: "#fef9ef" }}>
            Instagram
          </Typography>
        </a>

        <a
          href="https://www.linkedin.com/in/Ravi-Kumar-53426a24b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon
            sx={{ cursor: "pointer", color: "#fef9ef", fontSize: 60 }}
          />
           <Typography sx={{ cursor: "pointer", color: "#fef9ef" }}>
            LinkedIn
          </Typography>
        </a>

        <a
          href="mailto:ravikumar939681@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon
            sx={{ cursor: "pointer", color: "#fef9ef", fontSize: 60 }}
          />
           <Typography sx={{ cursor: "pointer", color: "#fef9ef" }}>
            Email
          </Typography>
        </a>
      </Box>
    </Box>
  );
};

export default SocialProfile;




// import React from "react";
// import "../resources/css/SocialProfiles.css";
// import GitHubIcon from '@mui/icons-material/GitHub';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import { socialprofils } from "../Utils/Constants";
// import { Typography } from "antd";
// import { Color } from "antd/es/color-picker";
// import { Transform } from "@mui/icons-material";
// import { alignProperty } from "@mui/material/styles/cssUtils";

// function SocialProfiles() {
//   console.log("SocialProfiles component rendered"); // add this debug statement
//   console.log("socialprofils object:", socialprofils); // add this debug statement

//   return (
//     <div className="stick_follow_icon">
//       <ul>
//         <div className="outside">
//           <div className="inside1">
//         {socialprofils.twitter && (
          
          
//             <a href={socialprofils.twitter}>
//               <TwitterIcon sx={{ width: "100px", height: "100px",borgerRadius:'10%', alignSelf:'flex-end', marginLeft: '70px' }} ></TwitterIcon>
//               <Typography sx={{cursor:"pointer",Color:"black", textAlign: 'center'}}>
//                  Twitter
//                </Typography>
//             </a>
          
//         )}
//         </div>
//         <div className="inside2">
//         {socialprofils.github && (
          
//             <a href={socialprofils.github}>
//               <GitHubIcon sx={{ width: "100px", height: "100px",borgerRadius:'10%', alignSelf:'flex-end',marginLeft: '70px' }}></GitHubIcon>
//             </a>
            
        
//         )}
//         </div >
//         <div className="inside3">
//         {socialprofils.facebook && (
          
//             <a href={socialprofils.facebook}>
//               <FacebookIcon sx={{ width: "100px", height: "100px",borgerRadius:'10%', alignSelf:'flex-end',marginLeft: '70px' }}></FacebookIcon>
              
//             </a>
          
//         )}
//         </div>
//         <div className="inside4">
//         {socialprofils.linkedin && (
          
//             <a href={socialprofils.linkedin}>
//               <LinkedInIcon sx={{ width: "100px", height: "100px",borgerRadius:'10%', alignSelf:'flex-end',marginLeft: '70px' }}></LinkedInIcon>
//             </a>
         
//         )}
//         </div>
//         </div>
//       </ul>
//     </div>
//   );
// }

// export default SocialProfiles
