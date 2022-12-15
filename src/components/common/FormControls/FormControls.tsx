import React from "react";
import { WrappedFieldMetaProps, WrappedFieldProps } from "redux-form";
import s from "./FormControls.module.css";

type FormControlPropsType = {
  meta: WrappedFieldMetaProps;
};

type FormControlType = (params: FormControlPropsType) => React.ReactNode;

const FormControl: React.FC<FormControlType> = ({
  meta: { touched, error },
  children,
}) => {
  const hasError = touched && error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...props.input} {...restProps} />
    </FormControl>
  );
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...props.input} {...restProps} />
    </FormControl>
  );
};
