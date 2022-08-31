
import { useContext, useState } from 'react';
import { CalculContext } from '../../assets/context/calculProvider';
import styled from 'styled-components';

const But = styled.div`
    background-color : rgb(54, 49, 24);
    border: none;
    cursor: pointer;
    font-weight: bold;
    color: white;
    margin : 2px;
    border-radius : 15px;
`

function Button({val, role, w, h}){
    var {addOp} = useContext(CalculContext)
    const exe = () => {
        if(role === "NUM"){
            addOp(parseInt(val))
        }else if(role === "OPP"){
            addOp(val)
        }
    }

    return (
        <But 
        style={
            {
                width : w,
                height : h,
            }
        }
        onClick={() => exe()}>
            {val}
        </But>
    )
}


export default Button