export type EventType = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | any>

export interface IInputProps {
    type: "text" | "radio"
    placeholder: string 
    value : string
    name: string 
    onChange ?: (e:EventType ) => void 
    buttonProps: ButtonProps
}

export interface ButtonProps {
    label: string 
    onCLick ?: (e:EventType ) => void
}

export interface IListProps {
    lists: string []
}

export  interface IToDo {
    toDoTitle:string 
    inputFieldProps: IInputProps,
    lists: IListProps,
    clearHandler ?: ((e:EventType) => void)
}