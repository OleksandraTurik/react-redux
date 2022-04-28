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
  const [title, setTitle] = useState(goal.title)
  const [description, setDescription] = useState(goal.description)

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteGoal(goal.id));
  };

  const handleSave = () => {
    console.log(title);
    const changeGoal = {
      title,
     description,
      id: goal.id
    }
    dispatch(editGoal(changeGoal))
    setEdit(false)
  };

  const handleEdit = () => {
    setEdit(true)
    console.log(goal.id)
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleChangeDescription = (e) => {
    setDescription(e.target.value)
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
                value={title}
                onChange={handleChangeTitle}
              />
              <TextField
                fullwidth
                label="Edit description"
                value={description}
                onChange={handleChangeDescription}
              />
              <div>
                <Button onClick={handleSave} size="small" color="primary">
                  Save
                </Button>
                <Button onClick={() => setEdit(false)} size="small" color="primary">
                  Cancel
                </Button>
              </div>
              
            </>
          ) : (
            <>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {goal.title}
            </Typography>
             <Typography
             sx={{ fontSize: 14 }}
             color="text.secondary"
             gutterBottom
             >
             {goal.description}
           </Typography>
            </>
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
