import React, { useEffect, useState } from "react";
import { setClass } from "../../modules/setClass";
import { SwitchProps } from "./Switch.types";
import texts from "./Switch.json"
import "./Switch.scss";
import Text from "../a_Text/Text";

const Switch = ({onChange, children, value, theme, className}: SwitchProps) => {

    const [checked, setChecked] = useState(value)

    useEffect(() => {
        onChange(checked)
    }, [checked])

    return (
        <div onClick={() => setChecked(!checked)} className={setClass("hw_switch", [theme, checked?"checked":""], className)}>
            <div className="hw_switch__pointer" />
            <Text size={"medium"} children={children} theme={theme} />
        </div>
    )
}

export default Switch
