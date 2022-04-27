import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { deleteGoal, editGoal } from "../store/actions/actions";
import  TextField  from "@mui/material/TextField";

const Goal = ({ goal }) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState('')

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteGoal(goal.id));
  };

  const handleEdit = (goal) => {
    const changeGoal = {
      title: value,
      id: goal.id
    }
    dispatch(editGoal(changeGoal))
    setEdit(false)
  };

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <Card style={{ marginTop: 10, marginBottom: 10 }}>
      <CardActionArea>
        <CardContent>
          {edit ? (
            <>
              <TextField
                fullwidth
                label="Edit goal"
                value={value}
                onChange={handleChange}
              />
              <Button onClick={handleEdit} size="small" color="primary">
                Save
              </Button>
              <Button onClick={() => setEdit(false)} size="small" color="primary">
                Cansel
              </Button>
            </>
          ) : (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {goal.title}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={handleDelete} size="small" color="primary">
          Delete
        </Button>
        <Button onClick={handleEdit} size="small" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default Goal;
