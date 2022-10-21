import * as React from "react";
import data from "../data/ListData.json";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const ListNames = (props) => {
  //Filter Data to Return only values that match
  const filteredData = data.filter((item) => {
    //if no input return the original
    if (props.inputSearch === "") {
      return item;
    }
    //return the item which contains the user input
    else {
      return item.department.toLowerCase().includes(props.inputSearch);
    }
  });

  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {filteredData.map((item) => (
          <div>
            <ListItem alignItems="flex-start" key={item.id}>
              <ListItemAvatar>
                <Avatar
                  alt={item.first_name + item.last_name}
                  src={item.avatar}
                />
              </ListItemAvatar>
              <ListItemText
                primary={item.department}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item.first_name + item.last_name}
                    </Typography>
                    - {item.email}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" />
          </div>
        ))}
      </List>
    </div>
  );
};

export default ListNames;
