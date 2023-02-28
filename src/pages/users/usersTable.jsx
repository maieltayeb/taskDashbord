import React, { useState,useEffect } from 'react';

import {  makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';

import CircularProgress from '@material-ui/core/CircularProgress';

import Chip from '@material-ui/core/Chip' ;
import EditIcon from '@material-ui/icons/Edit';
import LockIcon from '@material-ui/icons/Lock';
import BlockIcon from '@material-ui/icons/Block';
import InputBase from '@material-ui/core/InputBase';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import GetAppIcon from '@material-ui/icons/GetApp';


import SearchIcon from '@material-ui/icons/Search';
import { Avatar, Divider, Link } from '@material-ui/core';
import { useSelector} from "react-redux";




const headCells = [
  { id: 'name',  label: 'name' },
  { id: 'userName', label: 'userName' },
  { id: 'emailAddress', label: 'emailAddress' },
  { id: 'group', label: 'group' },
  { id: 'status',  label: 'status' },
  { id: 'createdOn', label: 'createdOn' }
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  tableCell:{
    display:"flex"
  },

  TableHeader:{
    backgroundColor:"#e5e5e5"
  }
,
tableRowSelected: {
  "&$tableRowSelected, &$tableRowSelected:hover": {
    backgroundColor: "#e5e5e5"
  }
}
,
checkedBox: {
  color:"gray",
  '&$checked': {
    color:"#56af69",
  },
},
 checked: {},

toolbar:theme.mixins.toolbar,
avatar:{
fontSize:"inherit",
  width: theme.spacing(3),
   height: theme.spacing(3),
   marginRight:5
},

}));
const useSearchStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 250,
    boxShadow:"2"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 0,
  }

}));

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    "& .MuiChip-root": {
      borderRadius: 10,
    
    },
 
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    
    // border:"2px solid yellow",
    
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  chip:{
    "& .MuiChip-label":{
      display:"none",
     
          },
          paddingRight:"10px"

        },
        divider: {
          width:"2px",
          height: 28,
          
        },
        link:{
          flexGrow:1
        }


}));
 const UsersTable=()=> {
const usersArray=useSelector((state)=>state.users)
 const toolBarClasses=useToolbarStyles()
 const serachInputClasses=useSearchStyles()
  const [users,setUsers]=useState([])
    const [selected, setSelected] = React.useState([]);
   const [page, setPage] = React.useState(0);
   
   const [rowsPerPage, setRowsPerPage] = React.useState(5); 
 
 const [search,setSearch]=useState('')
  const classes = useStyles();
const [groups,setGroups]=useState([])
const [statuses,setStatuses]=useState([])
useEffect(()=>{
  setUsers(usersArray)
},[usersArray])

  useEffect(()=>{
    async function getGroups(){
      const response=  await fetch("https://dashbord-9926e-default-rtdb.firebaseio.com/groups.json")
      const groups =await response.json();
      let newGroups=[]
      for (const key in groups) {
       
        newGroups.push({id:key,...groups[key]})
        }
      setGroups(newGroups)
    }
   
    getGroups()
    

     
  },[])
  useEffect(()=>{
    async function getStatus(){
      const response=  await fetch("https://dashbord-9926e-default-rtdb.firebaseio.com/statuses.json")
      const statues =await response.json();
      let newStatues=[]
      for (const key in statues) {
       
        newStatues.push({id:key,...statues[key]})
        }
     
      setStatuses(newStatues)
    }
   
    getStatus()
    

     
  },[])
  
 
  
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };
  

  const handleChangePage = (event, newPage) => {
    
    setPage(newPage);
  };
  

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

 
const handelOnchangeSearch=(e)=>{
 
    setSearch(e.target.value)
  
  

}
 

  const isSelected = (id) =>selected.indexOf(id) !== -1;
  
  

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, users.length - page * rowsPerPage);



  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
      <Toolbar
      className={toolBarClasses.root}
    >
 <Paper component="form" className={serachInputClasses.root}>
       <IconButton type="submit" className={serachInputClasses.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        className={serachInputClasses.input}
        placeholder="Search...."
        inputProps={{ 'aria-label': 'search' }}
        onChange={handelOnchangeSearch}
        value={search}
        variant="outlined"
      />
    
      
    </Paper>
   
    {/* <TextField
        
          native
        inputProps={{
          padding:0
        }}
        // value={value}
        // name={name}
        // onChange={onChange}
  
        variant="outlined"
        
        placeholder="user Name"
      />    */}
       
     
   
   
    

   
    </Toolbar>  
    <Toolbar
      className={toolBarClasses.root}
    >
      
       <Typography   id="tableTitle" component="span">
      {selected.length}
        </Typography>
  <Typography   id="tableTitle" component="span">
      seleced
        </Typography>
        <Divider orientation="vertical"  className={toolBarClasses.divider}/>
        <Chip  className={toolBarClasses.chip} icon={<EditIcon />}/>
      <Chip  className={toolBarClasses.chip} icon={<BlockIcon />}/>
      <Chip   className={toolBarClasses.chip} icon={<LockIcon />}  />
      <Chip label="Assign to Propfile"/>
      <Chip label="Assign to Group"/>
      <Chip   className={toolBarClasses.chip} icon={<MoreVertIcon />} />
      
    
      <Typography   className={toolBarClasses.link}>
        <Link>  unselected All</Link>
   
        </Typography>
     
    
        <Chip className={toolBarClasses.chip} icon={<GetAppIcon/>} />
   
    </Toolbar>   
    {users.length?
          <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
             <TableHead>
      <TableRow className={classes.TableHeader}>
        <TableCell padding="checkbox">
        <Checkbox
        indeterminate={selected.length > 0 && selected.length < users.length}
            checked={users.length > 0 && selected.length === users.length}
            onChange={handleSelectAllClick}
            classes={{
              root: classes.checkedBox,
              checked: classes.checked
            }}
            />
          {/* <Checkbox
             indeterminate={
              selectedUsers.length > 0  &&  selectedUsers.length < rowCount
            }
              checked={rowCount > 0 && selectedUsers === rowCount}
            
             onChange={handleSelectAllClick}
            inputProps={{ 'aria-label': 'select all users' }}
            classes={{
                root: classes.checkedBox,
                checked: classes.checked
              }}
            
          /> */}
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align= 'left'     
          >
           
              {headCell.label}
             
            
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
     <TableBody>
              {
              users.filter((user)=>{
                return search.toLowerCase()===''? user:user.emailAddress.toLowerCase().includes(search)
              })
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user, index) => {
                 const isItemSelected = isSelected(user.id);
              
                  return (
                    <TableRow
                      hover
                       onClick={(event) => handleClick(event, user.id)}
                       role="checkbox"
                      aria-checked={isItemSelected}
                      
                      key={user.id}
                      selected={isItemSelected}
                      classes={{
                        selected: classes.tableRowSelected
                      }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          classes={{
                            root: classes.checkedBox,
                            checked: classes.checked
                          }}
                        />
                      </TableCell>
                      <TableCell  
                      id={index}
                    
                        >
                          <Box   className={classes.tableCell}>
                          <Avatar component="span" className={classes.avatar}>{user.name[0].toUpperCase()}{user.name[1].toUpperCase()}</Avatar> 
                        <Typography color="textPrimary" component="span">{user.name} </Typography> 
                          </Box>
                     
                       
                      </TableCell>
                      <TableCell align="left">{user.userName}</TableCell>
                      <TableCell align="left">{user.emailAddress}</TableCell>

                      <TableCell align="left">
                        {groups.find((group)=>user.userGroupId==group.id)?.groupName}
                        
                        </TableCell>


                      <TableCell align="left">
                        {statuses.find((status)=>user.userStatusId==status.id)?.statusName}
                        </TableCell>
                      <TableCell align="left">{user.createdOn}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height:  53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )} 
            </TableBody>
          {/* <CircularProgress /> */}
            {/* <TableBody>
              {users
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user, index) => {
                 const isItemSelected = isSelected(user.name);
              
                  return (
                    <TableRow
                      hover
                       onClick={(event) => handleClick(event, user.name)}
                       role="checkbox"
                      aria-checked={isItemSelected}
                       tabIndex={-1}
                      key={user.name}
                      selected={isItemSelected}
                      classes={{
                        selected: classes.tableRowSelected
                      }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          classes={{
                            root: classes.checkedBox,
                            checked: classes.checked
                          }}
                        />
                      </TableCell>
                      <TableCell  
                      id={index}
                    
                        >
                          <Box   className={classes.tableCell}>
                          <Avatar component="span" className={classes.avatar}>{user.name[0].toUpperCase()}{user.name[1].toUpperCase()}</Avatar> 
                        <Typography color="textPrimary" component="span">{user.name} </Typography> 
                          </Box>
                     
                       
                      </TableCell>
                      <TableCell align="left">{user.userName}</TableCell>
                      <TableCell align="left">{user.emailAddress}</TableCell>

                      <TableCell align="left">
                        {groups.find((group)=>user.userGroupId==group.id).groupName}
                        
                        </TableCell>


                      <TableCell align="left">
                        {statuses.find((status)=>user.userStatusId==status.id).statusName}
                        </TableCell>
                      <TableCell align="left">{user.createdOn}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )} 
            </TableBody>  */}
          </Table>
        </TableContainer> 
    
        :<CircularProgress />  }
     
        <TablePagination
          rowsPerPageOptions={[5,10]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> 
      </Paper>
     
    </div>
  );
}

export default UsersTable;