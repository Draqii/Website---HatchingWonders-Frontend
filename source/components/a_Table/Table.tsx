import React from "react";
import { setClass } from "../../modules/setClass";
import { TableProps } from "./Table.types";
import texts from "./Table.json"
import "./Table.scss";
import Text from "../a_Text/Text";

const Table = ({data, language, theme, className}: TableProps) => {

    return (
        <table className={setClass("hw_table", [theme], className)}>
            <thead>
                <tr className="hw_table__row">
                {data.headings.map((heading, headingID) => 
                <th className="hw_table__heading" key={"heading-"+headingID}><Text size="medium" theme={theme}>{heading}</Text></th>)}
                </tr>
            </thead>
            <tbody>
                {data.rows.map((rows, rowID) => 
                <tr className="hw_table__row" key={"row-"+rowID}>{rows.columns.map((column, columnID) => 
                    <td className="hw_table__field" key={"column-"+columnID}><Text size="medium" theme={theme}>{column}</Text></td>)}
                </tr>)}
            </tbody>
        </table>
    )
}

export default Table
