import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/Typography";

const Goal = ({goal}) => {
  return (
    <Card style={{ marginTop: 10, marginBottom: 10 }}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {goal.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color='primary'>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Goal;
