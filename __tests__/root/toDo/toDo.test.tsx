import { toDoDemoData } from "@root/__mock-props__/components/root/toDo"
import { ToDo } from "@src/components/root"
import { fireEvent, getByTestId, getByText, render } from "@testing-library/react"
import { inputFieldDemo } from "./config"

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


/**
 * 
 * Check the Add new Schedule button funcionble 
 */
describe ("Check the ToDo list", () => {
    let expectedOutput:string[] = [];
    let myInputItems:string [] = []
    it.each (inputFieldDemo) (`Check Input data`, (input) => {
        // expectedOutput.push (input)
        myInputItems.push (input)
        const {getAllByTestId,getByTestId} = render (
            <ToDo 
                toDoTitle= {toDoDemoData.toDoTitle}
                inputFieldProps = {toDoDemoData.inputFieldProps}
                clearHandler = {toDoDemoData.clearHandler}
                lists = {
                    {
                        lists:  myInputItems
                    }
                }
            />
        )
        const button = getByTestId ("addButton") as  HTMLInputElement
        fireEvent.click (button, {
            target: {
                value: input
            }
        })
        expectedOutput.push (button.value)
        const paragraph = getAllByTestId ("lists");
        const paraGraphElement:string[] = [];

        paragraph.forEach (p => {
            paraGraphElement.push(p.innerHTML)
        })
        // console.log(paraGraphElement)
        expect (paraGraphElement).toStrictEqual(expectedOutput)
    })
})