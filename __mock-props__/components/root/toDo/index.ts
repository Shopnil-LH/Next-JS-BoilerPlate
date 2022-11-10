import { EventType, IToDo } from "@src/types/root";

export const toDoDemoData: IToDo = {
    toDoTitle: "My Diary",
    inputFieldProps: {
        type: "text",
        placeholder: "Set Your Schedule",
        value: "mySchedule",
        name: "mySchedule",
        buttonProps: {
            label: "Add New  Schedule",
            onCLick: (e: EventType) => {alert("Clicked!!")}
        }
    },
    lists: {
        lists: ["Hello", "Bye"]
    }
}