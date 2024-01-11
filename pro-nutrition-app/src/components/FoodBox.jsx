import React, { useState } from "react";

function FoodBox(props){
    let{ele, index} = props;
    let {img, name, cal} = ele;

    const [input, setInput] = useState(0);
    const [quantity, setQuantity] = useState(0)

    function quantityHandler(){
        setQuantity(input)
    }
    return (
        <><div className="Main">
            <div className="Main" id="M">
                <div>
                    <img src={img} alt="itempic" className="item-pic"/>
                </div>
                <div className="game">
                    <span className="name">{name}</span>
                    <span>{cal}</span>
                </div>
                <div className="input">
                    <input type="number" className="qty-input" onChange={(e)=>{setInput(e.target.value)}} value={input}/>
                    <button className="bt" onClick={quantityHandler}>+</button>
                </div>
            </div>
                <p className="quantity">{quantity} {name} = {cal*quantity} calories</p>
                <button className="button" onClick={()=>{
                    setInput(0)
                    setQuantity(0)
                }}>reset</button>
            </div>
        </>
    )
}

export default FoodBox;