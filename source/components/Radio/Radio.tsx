import React, { useEffect, useState } from "react";
import { setClass } from "../../modules/setClass";
import { RadioProps } from "./Radio.types";
import Text from "../a_Text/Text";
import texts from "./Radio.json"
import "./Radio.scss";

const Radio = ({onChange, label, items, value, theme, className}: RadioProps) => {

    const [option, setOption] = useState(items[0])

    useEffect(() => {
        onChange(option)
    }, [option])

    return (
        <div className={setClass("hw_radio", [theme], className)}>
            {items.map((item, item_id) => <div onClick={() => setOption(item)} key={item_id} className={"hw_radio__option "+ (option===item?"hw_radio__option--active":"")}>
                <div className="hw_radio__circle" /> 
                <Text children={item} size={"medium"} theme={"light"} />
            </div>)}
        </div>
    )
}

export default Radio
