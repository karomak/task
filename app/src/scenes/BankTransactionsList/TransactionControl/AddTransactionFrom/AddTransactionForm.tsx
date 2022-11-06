import { Field, reduxForm, FormErrors } from "redux-form";
import { Button } from "../../../../components/atoms/Button/Button";
import { Form } from "../../../../components/atoms/Form/Form";
import { FormInput } from "../../../../components/atoms/FormInput/FormInput";

interface AddTransactionParams {
  amount: string;
  account: string;
  address: string;
  description: string;
}

const validate = (
  values: AddTransactionParams
): FormErrors<AddTransactionParams> => {
  const errors: FormErrors<AddTransactionParams> = {};
  const numbersRegExp = new RegExp(`[0-9]`);
  if (parseFloat(values.amount) <= 0) {
    errors.amount = "Amount should be above 0";
  }
  if (!numbersRegExp.test(values.account)) {
    errors.account = "Account should contain only numbers";
  }
  return errors;
};

const AddTransactionFormUnwrapped = (props: any) => {
  const { handleSubmit, pristine, submitting, errors } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Field name="amount" component={FormInput} label="Amount" />
      <Field name="account" component={FormInput} label="Account number" />
      <Field name="address" component={FormInput} label="Address" />
      <Field name="description" component={FormInput} label="Description" />
      <Button type="submit" disabled={pristine || submitting || errors}>
        Submit
      </Button>
    </Form>
  );
};

export const AddTransactionForm = reduxForm({
  form: "edit-user-form",
  validate,
})(AddTransactionFormUnwrapped);
