import { Divider, List, Paper, styled, Typography } from "@mui/material";

const Boards = () => {
  const MyPaper = styled(Paper)({
    height: "200px",
    width: "300px",
    marginRight: "20px",
    borderRadius: 10,
  }) as typeof Paper;

  return (
    <List sx={{ display: "flex" }}>
      <MyPaper elevation={10} sx={{ padding: "20px" }}>
        <Typography variant="h5">New Board</Typography>
        <Divider></Divider>
        <Typography variant="body1">Nothing here</Typography>
      </MyPaper>
    </List>
  );
};

export default Boards;
