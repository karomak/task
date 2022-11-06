import { Column } from "../Column/Column";
import { Input } from "../Input/Input";
import { StyledError, StyledWarning } from "../Notifications/Notifications";
import { Row } from "../Row/Row";

interface Props {
  input: any;
  label: string;
  type: string;
  meta: any;
}
export const FormInput = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}: Props) => (
  <Column>
    <Row>
      {label}
      <Input type={type} {...input} />
    </Row>
    {touched &&
      ((error && <StyledError>{error}</StyledError>) ||
        (warning && <StyledWarning>{warning}</StyledWarning>))}
  </Column>
);
