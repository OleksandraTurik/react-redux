import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addGoal } from "../store/actions/actions";

const Form = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState("");
  const [text, setText] = useState('')

  const handleClick = (e) => {
    e.preventDefault();
    if (!value || !text) return;
    const newGoal = {
      title: value,
      description: text,
      id: Date.now().toString(),
    };

    dispatch(addGoal(newGoal))
    setValue("");
    setText('')
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setText(e.target.value);
  };

  return (
    <form noValidate autoComplete="off">
      <TextField
        fullWidth
        label="Goal title"
        id="standart-title"
        value={value}
        required
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Description"
        id="standart-title"
        value={text}
        required
        onChange={handleChangeDescription}
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
