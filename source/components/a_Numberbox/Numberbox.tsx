import React from "react";
import { setClass } from "../../modules/setClass";
import { NumberboxProps } from "./Numberbox.types";
import Icon_edit from "../../../public/svgs/edit.svg"
import Icon_plus from "../../../public/svgs/plus.svg"
import Icon_minus from "../../../public/svgs/minus.svg"
import Icon from "../a_Icon/Icon";
import "./Numberbox.scss";

const Numberbox = ({min, max, value, onChange, placeholder, theme, className}: NumberboxProps) => {

    const decrement = () => {
        const _value = JSON.parse(JSON.stringify(value))
        onChange(_value - 1 < min ? min : _value - 1)
    }

    const increment = () => {
        const _value = JSON.parse(JSON.stringify(value))
        onChange(_value + 1 > max ? max : _value + 1)
    }

    const _onChange = (e) => {
        onChange(e.target.value)
    }

    return (
        <div className={setClass("hw_numberbox", [theme], className)}>
            <Icon
                className="hw_numberbox__icon hw_numberbox__minus"
                theme={theme === "light" ? "dark" : "light"} 
                onClick={decrement}
                ReactSVG={Icon_minus} />
            <div className="hw_numberbox__container">
                <Icon
                    className="hw_numberbox__icon hw_numberbox__pen"
                    theme={theme === "light" ? "dark" : "light"} 
                    ReactSVG={Icon_edit} />
                <input 
                    className="hw_numberbox__input hw_text" 
                    onChange={_onChange}
                    value={value}
                    placeholder={placeholder}
                    type={"number"} />
            </div>
            <Icon
                className="hw_numberbox__icon hw_numberbox__plus"
                theme={theme === "light" ? "dark" : "light"} 
                onClick={increment}
                ReactSVG={Icon_plus} />
        </div>
    )
}

export default Numberbox
