import { createContext, useContext, useState } from "react";


const TypingContext = createContext();

export const TypingContextProvider = ({children}) => {

    const [testTime, setTestTime] = useState(10);

    const values = {
        testTime,
        setTestTime
    }
    
    return(
        <TypingContext.Provider value={values}>
            {children}
        </TypingContext.Provider>
    )
}

export const useTypingContext = () => {
    return useContext(TypingContext);
}