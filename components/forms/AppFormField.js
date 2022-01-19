//import liraries
import React from "react";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

// create a component
const AppFormFild = ({ name, width = "100%", ...othetProps }) => {
  const { setFieldValue, setFieldTouched, errors, touched, values } =
    useFormikContext();
  return (
    <>
      {/* <input onB /> */}
      <input
        onChange={(e) => setFieldValue(name, e.target.value)}
        onBlur={() => setFieldTouched(name)}
        value={values[name]}
        {...othetProps}
        // width={width}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
};

//make this component available to the app
export default AppFormFild;
