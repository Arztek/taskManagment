import { styled, TextField } from "@mui/material";

type Props = {
  name?: string;
  type?: string;
  autoFocus?: boolean;
};

const InputField: React.FC<Props> = (props) => {
  const { name, type, autoFocus } = props;

  const MyTextField = styled(TextField)({
    background: "white",
    margin: "12px",
  }) as typeof TextField;

  return (
    <MyTextField
      required
      id={name}
      label={name}
      type={type}
      name={name}
      autoComplete={name}
      autoFocus={autoFocus}
      size="small"
    />
  );
};

export default InputField;
