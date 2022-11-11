import { toDoDemoData } from "@root/__mock-props__/components/root/toDo"
import { ToDo } from "@src/components/root"
import { fireEvent, getByTestId, getByText, queryByTestId, render } from "@testing-library/react"
import { inputFieldDemo } from "./config"
import HomePage from "@pages/index"

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
        const inputField = getByTestId ("toDoInput") as  HTMLInputElement
        const addButton = getByTestId ("addButton") as  HTMLInputElement
        fireEvent.change (inputField, {
            target: {
                value: input
            }
        })
        expectedOutput.push (inputField.value)
        const paragraph = getAllByTestId ("lists");
        const paraGraphElement:string[] = [];

        paragraph.forEach (p => {
            paraGraphElement.push(p.innerHTML)
        })
        // console.log(paraGraphElement)
        expect (paraGraphElement).toStrictEqual(expectedOutput)
    })
})


/**
 * 
 * Check the  new Schedule button funcionble 
 */
describe ("Check the Clear list", () => {
    it (`Check The Full TO Do`, () => {
        const myInputData = "Hello World"
        const {getByTestId, getAllByTestId, queryByTestId} = render (<HomePage/>)
        const inputField = getByTestId ("toDoInput") as  HTMLInputElement
        const addButton = getByTestId ("addButton") as  HTMLInputElement
        //change the to do input field with a static value
        fireEvent.change (inputField, {
            target: {
                value: myInputData
            }
        })
        //when user click on add button 
        fireEvent.click (addButton)
        
        const paragraph = getAllByTestId ("lists");

        //set all paragraph element in a new array
        const paraGraphElement:string[] = [];
        paragraph.forEach (p => {
            paraGraphElement.push(p.innerHTML)
        });

        //expect that paragraph data will be match with expected data
        expect (paraGraphElement).toStrictEqual ([myInputData])

        //do the clear button part
        const clearButton = getByTestId ("clearButton")
        
        //when user click on clear button
        fireEvent.click (clearButton)
        
        //expect that there don't have any paragraph with data-testid => list
        expect(queryByTestId(/list/i)).toBeNull();
    })
})