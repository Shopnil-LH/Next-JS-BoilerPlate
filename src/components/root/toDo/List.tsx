import { IListProps } from '@src/types/root/toDo'
import React from 'react'

export const List = ({
  lists
}:IListProps) => {
  return (
    <>
      {
        lists.map ((list:string, ind:number) => {
          return (
            <p key = {ind} data-testid = "lists">{list}</p>
          )
        })
      }
    </>
  )
}
