import { React, useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logo from "../src/assets/Logo Zip File/png/logo2.png";

import amoa_initiation from "./data/amoa_initiation.json";
import amoa_technique from "./data/amoa_technique.json";
import amoa_pfe from "./data/amoa_pfe.json";
import amoa_all from "./data/amoa_all.json";

import devops_initiation from "./data/devops_initiation.json";
import devops_technique from "./data/devops_technique.json";
import devops_pfe from "./data/devops_pfe.json";
import devops_all from "./data/devops_all.json";

import iccn_initiation from "./data/iccn_initiation.json";
import iccn_technqiue from "./data/iccn_technique.json";
import iccn_pfe from "./data/iccn_pfe.json";
import iccn_all from "./data/iccn_all.json";

import sesnum_initiation from "./data/sesnum_initiation.json";
import sesnum_technique from "./data/sesnum_technique.json";
import sesnum_pfe from "./data/sesnum_pfe.json";
import sesnum_all from "./data/sesnum_all.json";

import software_initiation from "./data/software_initiation.json";
import software_technique from "./data/software_technique.json";
import software_pfe from "./data/software_pfe.json";
import software_all from "./data/software_all.json";
const drawerWidth = 240;



const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function MiniDrawer ({onChange}){
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [job, setJob] = useState("Softawre engineering");
  const [type, setType] = useState(null);
  const string = !open ? "15em" : "5em";
  const mystyle = {
    marginLeft: string
  };

  const all = () => {
    
    switch (job) {
      case "Software engineering":
        onChange(software_all);
        break;
      case "Cybersecurity consulting":
        onChange(iccn_all);
        break;
      case "embeeded systems engineering":
        onChange(sesnum_all);
        break;
      case "Devops engineering":
        onChange(devops_all);
        break;
      case "AMOA consulting":
        onChange(amoa_all);
        break;
    }
  };

  const initiation = () => {
    switch (job) {
      case "Software engineering":
        onChange(software_initiation);
        break;
      case "Cybersecurity consulting":
        onChange(iccn_initiation);
        break;
      case "embeeded systems engineering":
        onChange(sesnum_initiation);
        break;
      case "Devops engineering":
        onChange(devops_initiation);
        break;
      case "AMOA consulting":
        onChange(amoa_initiation);
        break;
    }
  };

  const technique = () => {
    switch (job) {
      case "Software engineering":
        onChange(software_technique);
        break;
      case "Cybersecurity consulting":
        onChange(iccn_technqiue);
        break;
      case "embeeded systems engineering":
        onChange(sesnum_technique);
        break;
      case "Devops engineering":
        onChange(devops_technique);
        break;
      case "AMOA consulting":
        onChange(amoa_technique);
        break;
    }
  };

  const pfe = () => {
    switch (job) {
      case "Software engineering":
        onChange(software_pfe);
        break;
      case "Cybersecurity consulting":
        onChange(iccn_pfe);
        break;
      case "embeeded systems engineering":
        onChange(sesnum_pfe);
        break;
      case "Devops engineering":
        onChange(devops_pfe);
        break;
      case "AMOA consulting":
        onChange(amoa_pfe);
        break;
    }
  };

  useEffect(() => {
    switch(type){
      case "All types of":
        all();
        break;
      case "PFE":
        pfe();
        break;
      case "Observation":
        initiation();
        break;
      case "Technical":
        technique();
        break; 
    }
  })

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            display={"flex"}
            sx={{ flexDirection: "row" }}
          >
            <h4 style={{ marginTop: "23px" }}>
              {type ? type : "PFE"} internships distribution : {job}
            </h4>
            <img src={logo} alt="" width={85} height={80} style={mystyle} />
            <div style={{ marginTop: "5px" }}>
              <h4>LOC-INT</h4>
              <h6>Let The Map Guides You</h6>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <List>
          {[
            "Software engineering",
            "Cybersecurity consulting",
            "embeeded systems engineering",
            "Devops engineering",
            "AMOA consulting",
          ].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{text}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 3.5,
                    }}
                    onClick={() => {
                      setJob(text);
                      setType("All types of");
                    }}
                  >
                    <ListItemText
                      primary="All"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 3.5,
                    }}
                    onClick={() => {
                      setJob(text);
                      setType("Observation");
                    }}
                  >
                    <ListItemText
                      primary="Observation internships"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 3.5,
                    }}
                    onClick={() => {
                      setJob(text);
                      setType("Technical");
                    }}
                  >
                    <ListItemText
                      primary="Technical internships"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 3.5,
                    }}
                    onClick={() => {
                      setJob(text);
                      setType("PFE");
                    }}
                  >
                    <ListItemText
                      primary="PFE internships"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </AccordionDetails>
              </Accordion>
            </ListItem>
          ))}
        </List>

      </Drawer>
    </Box>
  );
};
export default MiniDrawer;
