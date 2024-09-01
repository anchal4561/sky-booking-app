// //global state.
import  React, { useContext, useState } from 'react';
import Toast from '../Components/Toast';
import { useQuery } from 'react-query';
import * as apiClient from '../api-client'
//showToast() doesnt return anything so void

type ToastMessage={
    message: string;
    type: "SUCCESS" | "ERROR";
}
type AppContext={
    showToast:(toastMesaage: ToastMessage)=> void;
    isLoggedIn: boolean;
}

//create context
const AppContext=React.createContext<AppContext|undefined>(undefined)
//provider wraps the component and gives accesss to all the things in context

export const AppContextProvider=({children}:{children: React.ReactNode})=>{
//declare state objet
const [toast,setToast]=useState<ToastMessage|undefined>(undefined);
const { isError } = useQuery("validateToken", apiClient.validateToken, {
    retry: false,
  });
    return(
        <AppContext.Provider value=
        {{showToast:(toastMesaage)=>{
            setToast(toastMesaage);
        },
        isLoggedIn : !isError
        }}>

            {toast && (<Toast message={toast.message} type={toast.type}
            onClose={()=>setToast(undefined)}/>)}
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext=()=>{
    const context=useContext(AppContext);
    return context as AppContext;
}