import { Droppable } from "react-beautiful-dnd";
import { styled } from "@mui/material";
import ListItem from "./ListItem";
import { ItemType } from "./DraggableBoard";

const DivColumn = styled("div")({
  padding: "10px",
  borderRadius: "6px",
  background: "#d4d4d4",
});

const Title = styled("div")({
  textTransform: "uppercase",
  marginBottom: "20px",
  fontWeight: "600",
});

const DraggableElement: React.FC<{ prefix: string; elements: ItemType[] }> = ({ prefix, elements }) => {
  return (
    <DivColumn>
      <Title>{prefix}</Title>
      <Droppable droppableId={`${prefix}`}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {elements.map((item, index) => (
              <ListItem key={item.id} item={item} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DivColumn>
  );
};

export default DraggableElement;
