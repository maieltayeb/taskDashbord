import React from 'react';
// import { useState } from 'react';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Drawer from '@material-ui/core/Drawer';
// import Box from '@material-ui/core/Box';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import Badge from '@material-ui/core/Badge';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Link from '@material-ui/core/Link';
// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import MainListItem  from "../../components/listItem/listItem";
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
// import DashboardIcon from '@material-ui/icons/Dashboard';
// import SearchInput from '../../components/searchInput/sideBarSearchInput';


// import { format } from 'date-fns'


// import { Avatar, Button } from '@material-ui/core';

// import AddUserModal from '../../components/modal/addUser';
// import UsersTable from '../users/usersTable';

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   appBar: {
//     backgroundColor:"#ffffff",
//     width:`calc(100% - ${drawerWidth}px)`
//   },
//   drawer:{
//     width:drawerWidth,

//     height: '100vh',
//   },
 
 
//   logoImg:{
//     padding: theme.spacing(2),
//   },
  
//   title: {
//     flexGrow: 1,
//   },
//   drawerPaper: {
//     position: 'relative',
//     whiteSpace: 'nowrap',
//     width: drawerWidth,
//     backgroundColor:"#1a224f"
 
//   },
//   avatar:{
//     marginLeft:theme.spacing(2)
//   },
//   divider: {
//     width:"2px",
//     height: 28,
//     margin: 8,
//   },


//    appBarSpacer: theme.mixins.toolbar,
//   content: {
//     flexGrow: 1,
//     height: '100vh',
//     overflow: 'auto',
//   },
//   container: {
//     paddingTop: theme.spacing(2),
//     paddingBottom: theme.spacing(4),
//   },
//   div:{
//     display:"flex",
//     marginBottom:15
//   },
//   drawertext:{
//     color:"#a8a8a8"
//   }
// }));

// export default function Dashboard() {

//    const mySettingList=[
//     {
//         itemText:"ATM Settings",
//         nestedItems:[
//             {
//             itemId:1,
//             nestedItemText:"Users"
//         },
//         {
//             itemId:3,
//             nestedItemText:"Profiles"
//         },
//             {
//                 itemId:2,
//                 nestedItemText:"Groups"
//             }
        
    
//         ] },

//         {
//             itemText:"Bussiness Setup",
//             nestedItems:[
//                 {
//                 itemId:1,
//                 nestedItemText:"Users"
//             },
//             {
//                 itemId:3,
//                 nestedItemText:"Profiles"
//             },
//                 {
//                     itemId:2,
//                     nestedItemText:"Groups"
//                 }
            
        
//             ] },


//     {
//     itemText:"Users Management",
//     nestedItems:[
//         {
//         itemId:1,
//         nestedItemText:"Users"
//     },
//     {
//         itemId:3,
//         nestedItemText:"Profiles"
//     },
//         {
//             itemId:2,
//             nestedItemText:"Groups"
//         }
    

//     ] }
    
// ] 
// const [settingList,setSettingList]=useState(mySettingList)
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(true);
//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };
//   const handleDrawerClose = () => {
//     setOpen(false);
//   };
  
export default function Dashboard() {
  return (
    <div>Dashbord Page</div>
//     <div className={classes.root}>
//       <CssBaseline />
//       <AppBar position="absolute" className={classes.appBar} elevation={0} >
//         <Toolbar className={classes.toolbar}>
    
//           <Typography className={classes.title} color="textPrimary" >{
// format(new Date(), "'Good Morning! 'E MMM dd,Y h:m a ")} </Typography>
//  <IconButton >
// <HelpOutlineIcon />
// </IconButton>
//           <IconButton >
//             <Badge badgeContent={10} max={9} color="secondary">
//               <NotificationsIcon />
//             </Badge>
//           </IconButton>
//           <Divider orientation="vertical"  className={classes.divider}/>
  
//   <Typography color="textPrimary">
// userName </Typography>
//  <Avatar className={classes.avatar}>Na</Avatar>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         variant="permanent"
//         className={classes.drawer}
//         classes={{paper:classes.drawerPaper}}
//       >
//         <Box 
//         component="div"
//         className={classes.logoImg}
//         >
//         <Avatar variant="square"  alt="Logo"
//         src="/assets/logo.png"  />
     
        
//      </Box>
         

        
//          <div className={classes.toolbarIcon}>
         
//           <SearchInput />
//         </div> 
//         <List>
//         <ListItem button className={classes.drawertext}>
//       <ListItemIcon>
//         <DashboardIcon className={classes.drawertext}/>
//       </ListItemIcon>
//       <ListItemText primary="Dashboard" />
//     </ListItem>
//         </List>
//         <Divider />
//         <List
//       subheader={
//         <ListSubheader component="div" id="nested-list-subheader" className={classes.drawertext}>
//           SETTINGS
//         </ListSubheader>
//       }

//     >
//         {settingList.map((ele)=>
//         <MainListItem  item={ele}  />
//         )}
        
//         </List> 
        
//         <List>
//         <ListItem button>
     
//       <ListItemText primary="License Management" className={classes.drawertext}/>
//     </ListItem>
//         </List>
        
//       </Drawer>
//       <main className={classes.content}>
//         <div className={classes.appBarSpacer} />
//         <Container maxWidth="lg" className={classes.container}>
//           <div className={classes.div}>
//           <Typography className={classes.title} >Users Management</Typography>
         
//             <AddUserModal /> 
//           </div>
      
//           <Grid container spacing={3}>
            
          
        
            
//              <Grid item xs={12}>
//               <Paper className={classes.paper}>
//                 <UsersTable />
//               </Paper>
//             </Grid>
//           </Grid> 
      
//         </Container>
//       </main> 
//     </div>
  );
}