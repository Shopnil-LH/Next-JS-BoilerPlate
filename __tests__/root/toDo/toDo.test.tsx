import { toDoDemoData } from "@root/__mock-props__/components/root/toDo"
import { ToDo } from "@src/components/root"
import { fireEvent, render } from "@testing-library/react"
import { toDoInputBoxValue } from "./config"

/***
 * Test if the ToDo render correctly or not
 * 
 */
describe ("To Do Render Test", () => {
    it  ("render a toDo correctly", () => {
        const {getByTestId} = render (<ToDo {...toDoDemoData}/>)
        const toDo = getByTestId ("toDoHead")
        expect(toDo).toBeInTheDocument();
        expect (toDo).toMatchSnapshot();
    })
})

/***
 * 
 * Check the input field functional or not 
 */
describe("Check the toDo  input field", () => {

    it ("check input field run successfully or not", () => {
        const sampleInput = "Hello world"
        const {getByTestId} = render (<ToDo {...toDoDemoData}/>)
        const inputField = getByTestId ("toDoInput") as  HTMLInputElement
        fireEvent.change (inputField, {
            target: {
                value: sampleInput
            }
            
        })
        expect(inputField.value).toBe(sampleInput)
    })
} )

