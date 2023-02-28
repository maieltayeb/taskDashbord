import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import { format } from "date-fns";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addUser } from "../../redux/actions/userActions";
import CustomButton from '../button/button';
import CustomTextField from "../textField/textField";
const useStyles = makeStyles({
  dialog: {
    padding: "25px",
  },
  dialogTitle: {
    color: "#ffffff",
    backgroundColor: "#000000",
  },
  icon: {
    marginLeft: "70%",
  },
  label: {
    color: "#000000",
    margin: "8px",
  },

  input: {
    padding: 5,
  },
  dilaogButtonsContainer: {
    display: "flex",
    marginTop: 20,
  },
  title: {
    
    flexGrow:1,
    color:"#000000"
  },
  btn: {
    marginLeft: 5,
  },
  btnContainer:{
    marginLeft:200
  }
});

function SimpleDialog(props) {
  const dispatch = useDispatch();
  const history=useHistory()
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [userGroupId, setUserGroupId] = useState(1);
  const [userStatusId, setUserStatusId] = useState(1);
  const [groups, setGroups] = useState([]);
  
  const [createdOn, setCreatedOn] = useState(format(new Date(), " MMM dd,Y  "));

  useEffect(() => {
    async function getGroups() {
      const response = await fetch("https://dashbord-9926e-default-rtdb.firebaseio.com/groups.json");
      const groups = await response.json();
      let newGroups=[]
      for (const key in groups) {
          
        newGroups.push({id:key,...groups[key]})
       }
      setGroups(newGroups);
    }

    getGroups();
  }, []);
 

  const handelOnChangeName = (e) => {
    setName(e.target.value);
  };
  const handelOnChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const handelOnChangeEmailAddress = (e) => {
    setEmailAddress(e.target.value);
  };
  const handleChangeSelectUserGroup = (e) => {
    // console.log("eee from select",e.target.value)
    const groupItem = groups.find((ele) => ele.groupName == e.target.value);
    //console.log("groupItemgroupItem",groupItem);
    setUserGroupId(groupItem.id);
  };
  const handelAddUser = async(e) => {
    try{
    if ( name && userName &&emailAddress && userGroupId && userStatusId && createdOn ) {
    await dispatch( addUser({ name,userName,emailAddress,userGroupId,userStatusId,createdOn}))
   handelRestFields()
   handleClose()
    }}
    catch (error) {
      console.error(error);
      // Expected output: ReferenceError: nonExistentFunction is not defined
      //
  }};
const handelRestFields=(e)=>{
  setName("")
  setUserName("")
  setEmailAddress("")
 
}
  const handleClose = () => {
    handelRestFields()
    onClose(selectedValue);

  };

 

  return (
    <Dialog
      onClose={handleClose}
      fullWidth
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle className={classes.dialogTitle} id="simple-dialog-title">
        <Typography component="span">Add New User</Typography>
        <IconButton className={classes.icon} onClick={handleClose}>
          <CloseIcon style={{ color: "#ffffff" }} />
        </IconButton>
      </DialogTitle>

      <form noValidate className={classes.dialog}>
        <InputLabel id="fullName-label" className={classes.label}>
          Full Name
        </InputLabel>
        <CustomTextField
          labelid="fullName-label"
          placeholder="Enter Full Name"
          name="Full Name"
          value={name}
          autoComplete="Full Name"
          onChange={handelOnChangeName}
        />

        <InputLabel id="userName-label" className={classes.label}>
          User Name
        </InputLabel>

        <CustomTextField
          value={userName}
          labelid="userName-label"
          fullWidth
          id="UserName"
          placeholder="Enter UserName"
          name="Full Name"
          onChange={handelOnChangeUserName}
        />
        <InputLabel id="email-label" className={classes.label}>
          Email Address
        </InputLabel>
        <CustomTextField
          labelid="email-label"
          value={emailAddress}
          onChange={handelOnChangeEmailAddress}
          placeholder="Enter user email address"
          id="email"
          name="email"
        />
        <InputLabel id="demo-simple-select-label" className={classes.label}>
          User Group
        </InputLabel>
        <Select
          labelid="demo-simple-select-label"
          id="demo-simple-select"
          // value={}
          onChange={handleChangeSelectUserGroup}
          variant="outlined"
          fullWidth
          inputProps={{ className: classes.input }}
        >
          {groups?.map((groupItem) => (
            <MenuItem key={groupItem.id} value={groupItem.groupName}>
              {groupItem.groupName}
            </MenuItem>
          ))}
        </Select>

        {/* <InputLabel id="profile-select-label" className={classes.label}>
          Assign Profile
        </InputLabel> */}
        {/* <Select
          labelId="profile-select-label"
          id="profile-select"
          variant="outlined"
          fullWidth
          inputProps={{ className: classes.input }}
        >
          {statuses.map((statusItem) => (
            <MenuItem key={statusItem.id} value={statusItem.statusName}>
              {statusItem.statusName}
            </MenuItem>
          ))}
        </Select> */}

        <div className={classes.dilaogButtonsContainer}>
          <div className={classes.title} >
          <Typography onClick={handelRestFields} >
          <Button>  Reset fields</Button>
          
          
        
          </Typography>
          </div>
        <div>
          <Button
            variant="contained"
            color="default"
            className={classes.btn}
            onClick={handleClose}
          >
            cancel
          </Button>
          <CustomButton
            variant="contained"
            className={classes.btn}
            onClick={handelAddUser}
          >
            Add user
          </CustomButton>
          </div>
        </div>
      </form>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  
};

export default function AddUserModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <>
      <CustomButton variant="contained"  onClick={handleClickOpen}>
        +Add New
      </CustomButton>
      <SimpleDialog open={open} onClose={handleClose} />
    </>
  );
}
