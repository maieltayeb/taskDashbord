import React from 'react';
import { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';


import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';



import Collapse from '@material-ui/core/Collapse';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) =>{
  return({
    itemText:{     color:"#a8a8a8",
 
  },

    nested: {
      color:"#a8a8a8",
      paddingLeft: theme.spacing(4),
    }
  })

})
export default function MainListItem(props) {
const {item}=props
console.log("item",item)
  const classes = useStyles();
const [open, setOpen] = useState(false);

const handleClick = () => {
  setOpen(!open);
};
return (
  <div>
   
  
   
       <ListItem button onClick={handleClick} className={classes.itemText} key={item.id}>
       
        <ListItemText  primary={item.itemText} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem> 
       <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.nestedItems?.map((ele)=> <Link to={'/'+ele.nestedItemText.toLowerCase()} style={{ textDecoration: 'none' }}>
             <ListItem button className={classes.nested} key={ele.itemId}>
          
          <ListItemText primary={ele.nestedItemText} />
        </ListItem>
        </Link>
          
          )}
         
        </List>
      </Collapse> 
   
  </div>
);}