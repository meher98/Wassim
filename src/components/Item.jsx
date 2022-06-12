import React from "react";
import "../assets/css/Item.css"
function Item(props) {
  return (
        <div className="item">
                {(props.fleche === "1") ?<i class="fa fa-caret-up" aria-hidden="true" style={{color:"green",fontSize:"25px"}}></i>
                :<i class="fa fa-caret-down" aria-hidden="true" style={{color:"red",fontSize:"25px"}}></i>}
                <div className="Value">{props.value}  <span id="Counter">{props.counter}</span> {props.symbole}</div>
        </div>
  );
}

export default Item;
