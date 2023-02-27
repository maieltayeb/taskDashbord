import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    background: 'linear-gradient(45deg, #328242 30%, #328242 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',

     }, 
     label: {
      textTransform: 'capitalize',
    },
};

function CustomButton(props) {
  const { classes, children, className, ...other } = props;

  return (
    <Button className={clsx(classes.root, classes.label, className)} {...other}>
      {children || 'Add User'}
    </Button>
  );
}

CustomButton.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(CustomButton);
