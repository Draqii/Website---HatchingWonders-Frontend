import React from "react";
import { setClass } from "../../modules/setClass";
import { ListProps } from "./List.types";
import "./List.scss";

const List = ({isOrdered, items, language, theme, className}: ListProps) => {

    return (
        !isOrdered ? <ul className={setClass("hw_list", [theme, "unordered"], className)}>
            {items.map((item, item_id) => <li key={item_id} className="hw_list__listpoint">{item}</li>)}
        </ul> : <ol className={setClass("hw_list", [theme, "ordered"], className)}>
            {items.map((item, item_id) => <li key={item_id} className="hw_list__listpoint">{item}</li>)}
        </ol>
    )
}

export default List
