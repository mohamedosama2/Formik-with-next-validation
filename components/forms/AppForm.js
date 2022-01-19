//import liraries
import React from "react";
import { Formik } from "formik";
// create a component
const AppForm = ({ children, onSubmit, initialValues, validationSchema }) => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

//make this component available to the app
export default AppForm;
