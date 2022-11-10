import { EventType, IToDo } from '@src/types/root'
import React, {useState} from 'react'
import { InputData } from './inputData'
import { List } from './List'


export const ToDo = ({
    toDoTitle,
    inputFieldProps,
    lists: {
        lists
    },
    clearHandler
}: IToDo) => {
    const {
        type,
        placeholder,
        onChange,
        value,
        name,
        buttonProps: {
            label,
            onCLick
        },
        
    } = inputFieldProps
    return (
        <div className='' data-testid = "toDoHead">
            <h1 className = {`text-3xl font-bold`}>{toDoTitle || "To Do"}</h1>
            <InputData
                type = {type}
                placeholder = {placeholder || "Give me some input"}
                onChange = {onChange}
                value = {name || "random"}
                name = {name}
                buttonProps = {
                    {
                        label,
                        onCLick
                    }
                }
            />
        
            {/* show data part */}
            {/*
                If list data exist then list will be show other wise it will be hide
            */}
            {
                !!lists.length
                &&
                <div className='p-[2%] bg-red-400 inline-block rounded-[12px] mt-[2%]' >
                    <List 
                        lists= {lists}
                    />
                </div>
            }

            <br />

            {/* clear button */}
            <button 
                onClick={(e:EventType) => clearHandler ? clearHandler(e) : ():void => {}}
                className = {`px-[5%] py-[1%] bg-blue-800 text-white mt-[2%]`}
                
            >
                Clear All
            </button>
        </div>
    )
}
