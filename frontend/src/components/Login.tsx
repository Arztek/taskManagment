import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockIcon from "@mui/icons-material/Lock";
import { Paper, styled } from "@mui/material";

const Login = () => {
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

          <TextField
            margin="normal"
            required
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            size="small"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            name="password"
            label="Password"
            type="password"
            id="password"
            size="small"
            autoComplete="current-password"
          />
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Link sx={{ alignSelf: "center" }} href="#">
            {"Are you new? Sign Up"}
          </Link>
        </Box>
      </Mpaper>
    </Mbox>
  );
};

export default Login;
