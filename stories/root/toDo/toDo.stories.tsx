import { toDoDemoData } from "@root/__mock-props__/components/root/toDo";
import { ToDo } from "@src/components/root";
import { EventType } from "@src/types/root";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';

export default {
    title: "Components/Root/ToDo",
    component: ToDo,
    argTypes: {
        toDoTitle: {
            control: "text"
        },
        inputFieldProps: {
            control: "object"
        },
        lists: {
            control : "array"
        }
    }
} as ComponentMeta<typeof ToDo>

/* 
    Template 
*/
const Template: ComponentStory <typeof ToDo> =  (args) => {
    const [lists, setLists] = useState <string[]>([])
    const [myInput, setMyInput] = useState <string> ("")
    const toDoHandler = (e:EventType):void => {
        e.preventDefault();
        setMyInput (e.target.value)
    }
    const addDataHandler = (e:EventType):void =>{ 
        e.preventDefault(); 
        myInput && setLists ([...lists, myInput])
    }
    const clearHandler = (e:EventType): void => {
      e.preventDefault(); 
      setLists ([])
    }
    return (
        <div className = {`d-flex bg-gray p-5`}>
            <ToDo 
                toDoTitle='My Diary'
                inputFieldProps={
                    {
                    type: "text",
                    placeholder: "Set your schedule",
                    value: myInput,
                    name: myInput,
                    onChange: toDoHandler,
                    buttonProps: {
                        label: "Add New Schedule",
                        onCLick: addDataHandler
                    }
                    }
                }
                lists = {
                    {
                    lists
                    }
                }
                clearHandler = {clearHandler}
            />
        </div>
    )
}

export const ToDoOne = Template.bind ({})

ToDoOne.args = {
    toDoTitle:toDoDemoData.toDoTitle,
    inputFieldProps: {
        type: toDoDemoData.inputFieldProps.type,
        placeholder: toDoDemoData.inputFieldProps.placeholder,
        value: toDoDemoData.inputFieldProps.value,
        name: toDoDemoData.inputFieldProps.name,
        buttonProps: {
            label:toDoDemoData.inputFieldProps.buttonProps.label,
        }
    },
    lists: {
        lists: ["Hello", "Bye"]
    }
}