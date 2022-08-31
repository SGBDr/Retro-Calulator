import { CalculProvider } from "../../assets/context/calculProvider";
import Screen from "../screen/Screen";
import KeyBoard from './../keyBoard/keyBoard';
import "./Calculator.css"



function Calculator(){
    return (
        <div className="posi">
            <CalculProvider>
                <div>
                    <Screen />
                    <KeyBoard />
                </div>
            </CalculProvider>
        </div>
    )
}

export default Calculator;