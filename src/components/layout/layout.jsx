import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import DashboardIcon from "@material-ui/icons/Dashboard";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";
import MainListItem from "../../components/listItem/listItem";

import { format } from "date-fns";

import { Avatar } from "@material-ui/core";

import AddUserModal from "../../components/modal/addUser";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "#ffffff",
    width: `calc(100% - ${drawerWidth}px)`,
  },
  drawer: {
    width: drawerWidth,

    height: "100vh",
  },

 
  logoImg: {
    margin: "auto",
    width: "40%",
    display: "block",
  },

  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    backgroundColor: "#1a224f",
  },
  avatar: {
    marginLeft: theme.spacing(2),
  },
  divider: {
    width: "2px",
    height: 28,
    margin: 8,
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  div: {
    display: "flex",
    marginBottom: 15,
  },
  drawertext: {
    color: "#a8a8a8",
  },
}));
const useSearchStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    borderRadius: 50,

    marginTop: 20,

    width: "100%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 0,
  },
}));

export default function Layout({ children }) {
  const mySettingList = [
    {
      itemText: "ATM Settings",
      nestedItems: [
        {
          itemId: 1,
          nestedItemText: "atm settings",
        },
        {
          itemId: 3,
          nestedItemText: "atm settings",
        },
        {
          itemId: 2,
          nestedItemText: "atm settings",
        },
      ],
    },

    {
      itemText: "Bussiness Setup",
      nestedItems: [
        {
          itemId: 1,
          nestedItemText: "bussiness setup",
        },
        {
          itemId: 3,
          nestedItemText: "bussiness setup",
        },
        {
          itemId: 2,
          nestedItemText: "bussiness setup",
        },
      ],
    },

    {
      itemText: "Users Management",
      nestedItems: [
        {
          itemId: 1,
          nestedItemText: "Users",
        },
        {
          itemId: 3,
          nestedItemText: "Profiles",
        },
        {
          itemId: 2,
          nestedItemText: "Groups",
        },
      ],
    },
  ];
  const [settingList, setSettingList] = useState(mySettingList);
  const classes = useStyles();
  const serachInputClasses = useSearchStyles();


  return (
    <div className={classes.root}>
      <CssBaseline />
   
      <AppBar position="absolute" className={classes.appBar} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} color="textPrimary">
            {format(new Date(), "'Good Morning! 'E MMM dd,Y h:m a ")}{" "}
          </Typography>
          <IconButton>
            <HelpOutlineIcon />
          </IconButton>
          <IconButton>
            <Badge badgeContent={10} max={9} color="secondary" overlap="rectangular">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Divider orientation="vertical" className={classes.divider} />

          <Typography color="textPrimary">userName </Typography>
          <Avatar className={classes.avatar}>Na</Avatar>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <Box component="div">
          <img src="/assets/logo.png" className={classes.logoImg} alt="Logo" />
        </Box>

        <Paper component="form" className={serachInputClasses.root}>
          <InputBase
            className={serachInputClasses.input}
            placeholder="Quick access...."
            inputProps={{ "aria-label": "search" }}
            // onChange={handelOnchangeSearch}
            // value={search}
            variant="outlined"
          />
          <IconButton
            type="submit"
            className={serachInputClasses.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>

        <List>
          <Link to="/dashbord">
            <ListItem button className={classes.drawertext}>
              <ListItemIcon>
                <DashboardIcon className={classes.drawertext} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              className={classes.drawertext}
            >
              SETTINGS
            </ListSubheader>
          }
        >
          {settingList?.map((ele) => (
            <MainListItem item={ele} />
          ))}
        </List>

        <List>
          <ListItem button>
            <ListItemText
              primary="License Management"
              className={classes.drawertext}
            />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <div className={classes.div}>
            <Typography className={classes.title}>Users Management</Typography>

            <AddUserModal />
          </div>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                {children}
                {/* <UsersTable /> */}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
