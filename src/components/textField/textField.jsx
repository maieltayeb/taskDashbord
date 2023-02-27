import React from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import './style.css'


 const CustomTextField =({onChange,value,classes,placeholder,labelid,name})=> {


    return (
     
        <OutlinedInput
        
          
          className={`${classes} without-padding`}
          value={value}
          name={name}
          onChange={onChange}
          labelId={labelid}
          variant="outlined"
          fullWidth
          placeholder={placeholder}
        />   
         
     
    );
  }



export default CustomTextField;
