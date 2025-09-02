"use client";

import { Field, Form, Formik } from "formik";
import { InitialValues, validationSchema } from "./helper";
import { IMaskInput } from "react-imask";
import classNames from "classnames";
import styles from "./consultation-form.module.css";
const ConsultationForm = () => {
  return (
    <Formik
      initialValues={InitialValues}
      validationSchema={validationSchema}
      onSubmit={() => {
        console.log("send");
      }}
    >
      {({ errors, touched }) => (
        <Form className={styles.consultationForm_main}>
          <div className={styles.input_container}>
            <Field
              className={classNames(
                touched.name && errors.name ? styles.test : null,
                styles.form_input
              )}
              name="name"
              placeholder="Ваше имя"
            />
          </div>
          <div className={styles.input_container}>
            <Field name="phone">
              {({ field, form }: any) => (
                <IMaskInput
                  className={classNames(
                    touched.phone && errors.phone ? styles.test : null,
                    styles.form_input
                  )}
                  {...field}
                  mask="+{7}(000)000-00-00"
                  placeholder="Телефон"
                  onAccept={(value) => form.setFieldValue("phone", value)}
                />
              )}
            </Field>
          </div>
          <button className={styles.send_btn}>Отправить</button>
        </Form>
      )}
    </Formik>
  );
};

export default ConsultationForm;
