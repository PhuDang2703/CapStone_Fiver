import React from 'react';
import { ListItem, ListItemText } from '@mui/material';
import List from '@mui/material/List';
import { StyledLink } from '../CategoriesList/CategoriesList';
const AboutList = () => {
  return (
    <>
      <List>
        <ListItem disablePadding>
          <StyledLink underline="hover">
            <ListItemText primary={`Careers`}></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline="hover">
            <ListItemText primary={`Press & News`}></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline="hover">
            <ListItemText primary={`Partnerships`}></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline="hover">
            <ListItemText primary={`Privacy Policy`}></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline="hover">
            <ListItemText primary={`Terms of Service`}></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline="hover">
            <ListItemText
              primary={`Intellectual Property Claims`}
            ></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline="hover">
            <ListItemText primary={`Investor Relations`}></ListItemText>
          </StyledLink>
        </ListItem>
      </List>
    </>
  );
};

export default AboutList;
