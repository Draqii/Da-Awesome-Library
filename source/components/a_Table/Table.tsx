import React from "react";
import { setClass } from "../../modules/setClass";
import { TableProps } from "./Table.types";
import Text from "../a_Text/Text";
import "./Table.scss";

const Table = ({data, theme, className}: TableProps) => {

    return (
        <table className={setClass("hw_table", [theme], className)}>
            <thead className="hw_table__rows">
                <tr className="hw_table__row">
                {data.headings.map((heading, headingID) => 
                <th className="hw_table__heading" key={"heading-"+headingID}><Text size="large" theme={theme}>{heading}</Text></th>)}
                </tr>
            </thead>
            <tbody className="hw_table__rows">
                {data.rows.map((rows, rowID) => 
                <tr className="hw_table__row" key={"row-"+rowID}>{rows.columns.map((column, columnID) => 
                    <td className="hw_table__field" key={"column-"+columnID}><Text size="medium" theme={theme}>{column}</Text></td>)}
                </tr>)}
            </tbody>
        </table>
    )
}

export default Table
