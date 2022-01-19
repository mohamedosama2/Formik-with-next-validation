//import liraries
import React from "react";
import { useFormikContext } from "formik";

// create a component
const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return <button onClick={handleSubmit}>{title}</button>;
};

//make this component available to the app
export default SubmitButton;
