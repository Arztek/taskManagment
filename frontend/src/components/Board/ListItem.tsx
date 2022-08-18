import { Draggable } from "react-beautiful-dnd";
import { styled } from "@mui/material";
import { ItemType } from "./DraggableBoard";

const DivCard = styled("div")({
  padding: "10px",
  borderRadius: "6px",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
  background: "white",
  margin: "0 0 8px 0",
  display: "grid",
  gridGap: "20px",
  flexDirection: "column",
});

const Footer = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const ListItem: React.FC<{ item: ItemType; index: number }> = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => {
        return (
          <DivCard style={{}} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <div>{item.content}</div>
            <Footer>
              <div>id: {item.id}</div>
            </Footer>
          </DivCard>
        );
      }}
    </Draggable>
  );
};

export default ListItem;
