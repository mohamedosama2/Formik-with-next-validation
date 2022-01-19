import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import AppForm from "../components/forms/AppForm";
import * as Yup from "yup";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
const Home: NextPage = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required().min(5),
    email: Yup.string().required().email("enter email plzzzz"),
    password: Yup.string()
      .required()
      .min(5, "must be at least 5")
      .max(10, "must be at most 10"),
  });
  return (
    <div className={styles.container}>
      <AppForm
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        onSubmit={(values: any, { resetForm }: any) => {
          console.log(values);
          // resetForm();
        }}
        {...{ validationSchema }}
      >
        <AppFormField name="username" placeholder="Username" />
        <AppFormField name="email" placeholder="Email" />
        <AppFormField name="password" placeholder="Password" type="password" />
        <SubmitButton title="Submit" />
      </AppForm>
    </div>
  );
};

export default Home;
