import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LockIcon from "@mui/icons-material/Lock";
import { FormControl, InputLabel, MenuItem, Paper, Select, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputField from "./TextField";
import { useState } from "react";

const SignUp: React.FC<{ setSignOption: Function }> = (props) => {
  const [date, setDate] = useState<Date | null>(null);
  const [usage, setUsage] = useState<string>("");
  const { setSignOption } = props;

  const handleDate = (newValue: Date | null) => {
    setDate(newValue);
  };

  const handleUsage = (newValue: any) => {
    console.log(newValue);
    setUsage(newValue);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Paper elevation={5} sx={{ mt: 5, p: 3, bgcolor: "secondary.main" }}>
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
          <InputField name={"Email"} type={"email"}></InputField>
          <InputField name={"Password"} type={"password"}></InputField>
          <InputField name={"Repeat Password"} type={"password"}></InputField>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Birthdate"
              inputFormat="dd/MM/yyyy"
              value={date}
              onChange={handleDate}
              renderInput={(params) => (
                <TextField required margin="normal" size="small" sx={{ bgcolor: "white", m: "12px" }} {...params} />
              )}
            />
          </LocalizationProvider>
          <FormControl sx={{ margin: "12px" }}>
            <InputLabel>Usage type</InputLabel>
            <Select
              label="Usage type"
              value={usage}
              onChange={(e) => handleUsage(e.target.value)}
              size="small"
              sx={{ bgcolor: "white" }}
            >
              <MenuItem value={"Working"}>Working</MenuItem>
              <MenuItem value={"Personal"}>Personal</MenuItem>
              <MenuItem value={"Studing"}>Studing</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" variant="contained" sx={{ margin: "12px" }}>
            Sign Up
          </Button>
          <Button
            size="small"
            sx={{ alignSelf: "center", margin: "12px", bgcolor: "white" }}
            variant="outlined"
            onClick={() => setSignOption((prev: any) => !prev)}
          >
            {"Already have account? Sign In"}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default SignUp;
