import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Card from "./Card";
import style from "./Kanban.module.css";

export default function Kanban({ data, setData }) {
  const onDragEnd = (result) => {
    if (!result.destination) return console.log(result.destination);
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const destinationColIndex = data.findIndex(
        (e) => e.id === destination.droppableId
      );
      const sourceCol = data[sourceColIndex];
      const destinationCol = data[destinationColIndex];

      const sourceTask = [...sourceCol.tasks];
      const destinationTask = [...destinationCol.tasks];

      const [removed] = sourceTask.splice(source.index, 1);
      destinationTask.splice(destination.index, 0, removed);

      data[sourceColIndex].tasks = sourceTask;
      data[destinationColIndex].tasks = destinationTask;

      setData(data);
    } else {
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      console.log(data[sourceColIndex]);
      const sourceCol = data[sourceColIndex];
      const sourceTask = [...sourceCol.tasks];
      const [removed] = sourceTask.splice(source.index, 1);
      console.log(source.index);
      console.log(removed);
      sourceTask.splice(destination.index, 0, removed);
      data[sourceColIndex].tasks = sourceTask;
      setData(data);
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={style.kanban}>
        {data?.map((section) => {
          return (
            <Droppable key={section.id} droppableId={section.id}>
              {(droppableProvided) => (
                <div
                  {...droppableProvided.droppableProps}
                  className={style.kanbanSection}
                  ref={droppableProvided.innerRef}
                >
                  <div className={style.kanbanSectionTitle}>
                    {section.title}
                  </div>
                  <div className={style.kanbanSectionContent}>
                    {section?.tasks?.map((task, index) => {
                      return (
                        <Draggable
                          key={task.id}
                          draggableId={task.id}
                          index={index}
                          type="TASK"
                        >
                          {(draggableProvided, snapshot) => (
                            <div
                              ref={draggableProvided.innerRef}
                              {...draggableProvided.draggableProps}
                              {...draggableProvided.dragHandleProps}
                            >
                              <Card>{task.title}</Card>
                            </div>
                          )}
                        </Draggable>
                      );
                    })}
                  </div>
                  {droppableProvided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </div>
    </DragDropContext>
  );
}
