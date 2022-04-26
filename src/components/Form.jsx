import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addGoal } from "../store/actions/actions";

const Form = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (!value) return;
    const newGoal = {
      title: value,
      id: Date.now().toString(),
    };

    dispatch(addGoal(newGoal))
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form noValidate autoComplete="off">
      <TextField
        fullWidth
        label="Goal title"
        id="standart-title"
        value={value}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: 10 }}
        onClick={handleClick}
      >Save</Button>
    </form>
  );
};

export default Form;
