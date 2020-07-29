import React, { Component, Fragment } from 'react';
import './Navigation.css';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
const Navigation = ({ titles, items, onClick }) => {
  const [open, setOpen] = React.useState(null);
  const handleClick = (index) => {
    setOpen(index);
  };
  const handleItems = (items) => {
    return items.map(item => {
      return (
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemText primary={item} />
          </ListItem>
        </List>
      )
    });
  };
  return (
    <nav>
      <List>
        {
          titles.map((title, index) => {
            return (
              <Fragment>
                <ListItem button onClick={()=>handleClick(index)}>
                  <ListItemText primary={title} />
                  {open === index ? "YO" : "HEY"}
                </ListItem>
                <Collapse in={open === index} timeout="auto" unmountOnExit>
                  {handleItems(items[index])}
                </Collapse>
              </Fragment>
            )
          })
        }
      </List>
    </nav>
  );
}

export default Navigation;