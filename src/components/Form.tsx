import React, {
  ReactElement,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';
import { Formik, FormikHelpers, FormikProps } from 'formik';

interface Props<Value> {
  initialValues: Value;
  children: ReactElement | ReactElement[];
  onSubmit: (
    values: Value,
    formikHelpers: FormikHelpers<Value>,
  ) => void | Promise<any>;
  validationSchema: any;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  validate?: (values: any) => void;
}

const Form: ForwardRefRenderFunction<FormikProps<any>, Props<any>> = (
  {
    initialValues,
    children,
    onSubmit,
    validationSchema,
    validateOnChange = false,
    validateOnBlur = true,
    validate,
  },
  ref,
) => {
  return (
    <Formik
      innerRef={ref}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validateOnChange={validateOnChange}
      validationSchema={validationSchema}
      validateOnBlur={validateOnBlur}
      validate={validate}>
      {() => {
        return <>{children}</>;
      }}
    </Formik>
  );
};

export default forwardRef(Form);
