import { useState } from "react"
import { createContext } from "react"

export const CalculContext = createContext()

export const CalculProvider = ({ children }) => {
    const [cal, setCal] = useState({calcul :localStorage.getItem("cal-prev-calc"), result : localStorage.getItem("cal-prev-resul")})
    
    const addOp = (el) => {
        if(cal.calcul.length <= 50){
            let list = ['/', '*', '+', '-']
            let elTemps = cal.calcul[cal.calcul.length - 1]
            console.log(el)
            if(el === '.' && !isNaN(elTemps)){
                setCal({calcul : cal.calcul + '.'})
            }
            else if(list.indexOf(elTemps) >= 0 && elTemps !== el){
                    let t = cal.calcul.split('')
                    t[t.length - 1] = el
                    setCal({calcul : t.join("")})
            }else if(list.indexOf(el) >= 0 && !isNaN(elTemps)){
                setCal({calcul : cal.calcul + el})
            }
    
            if(!isNaN(el)){
                setCal({calcul : cal.calcul + el, result : eval(cal.calcul + el)})
            }

            localStorage.setItem("cal-prev-calc", cal.calcul)
            localStorage.setItem("cal-prev-resul", cal.result)
        }
        if(el === "CE"){
            setCal({calcul : "", result : 0})
        }
    }

    const clear = () => {
        setCal({calcul : "", result : 0})
    }
 
    return (
        <CalculContext.Provider value={{ cal, addOp, clear }}>
            {children}
        </CalculContext.Provider>
    )
}