import Button from "../button/button"
import './keyBoard.css'

function KeyBoard(){
    return (
        <div className="hot">
            <div>
                <div className="numbers">
                    {
                        ["CE", "/", "*"].map((n => {
                            return (
                                <Button val={n} key={n} role={"OPP"} w={"90px"} h={"50px"}/>
                            )
                        }))
                    }
                </div>
                <div className="numbers">
                    {
                        [7, 8, 9].map((n => {
                            return (
                                <Button val={n} key={n} role={"NUM"} w={"90px"} h={"50px"}/>
                            )
                        }))
                    }
                </div>
                <div className="numbers">
                    {
                        [4, 5, 6].map((n => {
                            return (
                                <Button val={n} key={n} role={"NUM"} w={"90px"} h={"50px"}/>
                            )
                        }))
                    }
                </div>
                <div className="numbers">
                    {
                        [1, 2, 3].map((n => {
                            return (
                                <Button val={n} key={n} role={"NUM"} w={"90px"} h={"50px"}/>
                            )
                        }))
                    }
                </div>
                <div className="numbers">
                    <Button val={0} key={0} role={"NUM"} w={"180px"} h={"50px"}/>
                    <Button val={'.'} key={'.'} role={"OPP"} w={"90px"} h={"50px"}/>
                </div>
            </div>
            <div>
                <div className="numbers_v">
                    <Button val={'-'} key={'-'} role={"OPP"} w={"90px"} h={"50px"}/>
                    <Button val={'+'} key={'+'} role={"OPP"} w={"90px"} h={"104px"}/>
                    <Button val={'EE'} key={'EE'} role={"OPP"} w={"90px"} h={"104px"}/>
                </div>
            </div>
        </div>
    )

}




export default KeyBoard