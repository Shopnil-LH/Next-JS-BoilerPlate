import { EventType, IInputProps } from '@src/types/root'
import React from 'react'

export const InputData = ({
    type,
    placeholder,
    value,
    name,
    buttonProps,
    onChange
}:IInputProps) => {
    const {
        label:buttonLabel,
        onCLick
    } = buttonProps //get the button props
  return (
    <div className = {`space-y-3`}>
        {/* take input */}
        <label htmlFor="toDo_input">Give input </label>
        <input 
            type= {type}
            name = {name} 
            // value = {value}
            placeholder= {placeholder}
            onChange = {((e:EventType) => onChange && onChange (e))}
            className = {`border-2 ml-5`}
            data-testid = "toDoInput"
        />
        <br />
        <button
            className= {`px-[5%] py-[1%] bg-blue-800 text-white`}
            onClick = {onCLick}
            data-testid = "addButton"
        >{buttonLabel}</button>
    </div>
  )
}
