import {createContext} from 'react';

export const TaskContext=createContext()

export function TaskContextProvider(props) {

    let x=20;

  return (
    <>
    <h1>componente context</h1>
       <TaskContext.Provider value={x}>
        {props.children}
       </TaskContext.Provider>
    </>
  )
}

