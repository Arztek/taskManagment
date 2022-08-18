import React, { useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableElement from "./DraggableElement";
import { styled } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const BoardHeader = styled("div")({
  padding: "15px",
  borderRadius: "6px",
  border: "6px solid #d4d4d4",
  background: "white",
  textTransform: "uppercase",
  fontWeight: "600",
  margin: "10px",
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "400px",
});

const DivBoard = styled("div")({
  padding: "20px",
  borderRadius: "6px",
});

const DivColumns = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridGap: "8px",
});

export type ItemType = {
  id: string;
  prefix: string;
  content: string;
};

// fake data generator
const getItems = (count: number, prefix: string) =>
  Array.from({ length: count }, (v, k) => k).map((k) => {
    const randomId = Math.floor(Math.random() * 1000);
    return {
      id: `item-${randomId}`,
      prefix,
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
    };
  });

//add element on list by index, return removed element and list
const removeFromList = (list: [], index: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};

//add element on list by index, return updated
const addToList = (list: [], index: number, element: any) => {
  const result = Array.from(list);
  result.splice(index, 0, element as never);
  return result;
};

const lists = ["To-Do", "In Progress", "Done"];

const generateLists = () => lists.reduce((acc, listKey) => ({ ...acc, [listKey]: getItems(3, listKey) }), {});

const DraggableBoard = () => {
  const [elements, setElements] = React.useState<any>(generateLists());

  useEffect(() => {
    setElements(generateLists());
  }, []);

  const onDragEnd = (result: any) => {
    const { source, destination } = result;
    if (!result.destination) {
      return;
    }
    //clone list
    const listCopy = { ...elements };

    const sourceList = listCopy[source.droppableId];
    //remove from origin list
    const [removedElement, newSourceList] = removeFromList(sourceList, source.index);
    listCopy[source.droppableId] = newSourceList;
    // destination
    const destinationList = listCopy[destination.droppableId];
    listCopy[destination.droppableId] = addToList(destinationList, destination.index, removedElement);
    // save lists
    setElements(listCopy);
  };

  return (
    <>
      <BoardHeader contentEditable>
        <div style={{ overflow: "hidden" }}>{"New Board"}</div>
        <EditIcon />
      </BoardHeader>
      <DivBoard>
        <DragDropContext onDragEnd={onDragEnd}>
          <DivColumns>
            {lists.map((listKey) => (
              <DraggableElement elements={elements[listKey]} key={listKey} prefix={listKey} />
            ))}
          </DivColumns>
        </DragDropContext>
      </DivBoard>
    </>
  );
};

export default DraggableBoard;
