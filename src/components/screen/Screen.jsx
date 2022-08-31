import './Screen.css'
import { useContext } from 'react';
import { CalculContext } from '../../assets/context/calculProvider';


function Screen(){
    var {cal} = useContext(CalculContext)

    return (
        <div className="block1">
            <div className="block2">
                <div className="title">Make the change</div>
                <div className="calcul">{"> " + cal.calcul}</div>
                <div className="result">{"= " + cal.result}</div>
            </div>
        </div>
    )
}



export default Screen