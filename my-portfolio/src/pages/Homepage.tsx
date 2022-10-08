import React from 'react';
import logo from './logo.svg';
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import { Css, Html, Javascript } from "@mui/icons-material";

function Homepage(){
    return(
        <div>
        <div className="antialiased h-screen text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">This is the home page</div>
            <br />
            <Paper sx={{ 
                width: 320, 
                maxWidth: "100%", 
                margin: "auto" 
            }}>
                <MenuList>
                    <MenuItem>
                        <ListItemIcon>
                            <Html fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>HTML</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Css fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>CSS</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Javascript fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Javascript</ListItemText>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <Cloud fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Cloud </ListItemText>
                    </MenuItem>
                </MenuList>
            </Paper>
        </div>
    );
}

export default Homepage;
