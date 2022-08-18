import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LockIcon from "@mui/icons-material/Lock";
import { Paper, styled } from "@mui/material";
import InputField from "./TextField";

const SignIn: React.FC<{ setSignOption: Function }> = (props) => {
  const { setSignOption } = props;

  const Mbox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }) as typeof Box;

  const Mpaper = styled(Paper)({}) as typeof Paper;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Mbox>
      <Mpaper elevation={5} sx={{ mt: 5, p: 3, bgcolor: "secondary.main" }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ display: "flex", flexDirection: "column", width: "300px" }}
        >
          <Avatar
            sx={{
              alignSelf: "center",
              m: 5,
              bgcolor: "primary.light",
              height: "70px",
              width: "70px",
            }}
          >
            <LockIcon sx={{ height: "50px", width: "50px" }} />
          </Avatar>

          <InputField name={"Username"} type={"text"} autoFocus={true}></InputField>
          <InputField name={"Password"} type={"password"}></InputField>
          <Button type="submit" variant="contained" sx={{ margin: "12px" }}>
            Sign In
          </Button>
          <Button
            size="small"
            sx={{ alignSelf: "center", margin: "12px", bgcolor: "white" }}
            variant="outlined"
            onClick={() => setSignOption((prev: any) => !prev)}
          >
            {"Are you new? Sign Up"}
          </Button>
        </Box>
      </Mpaper>
    </Mbox>
  );
};

export default SignIn;
