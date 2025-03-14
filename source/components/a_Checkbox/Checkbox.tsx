import React from "react";
import { setClass } from "../../modules/setClass";
import { CheckboxProps } from "./Checkbox.types";
import SVG_Check from "../../../public/svgs/check.svg"
import Text from "../a_Text/Text";
import Icon from "../a_Icon/Icon";
import "./Checkbox.scss";

const Checkbox = ({onChange, checked, children, theme, className}: CheckboxProps) => {

    const _onChange = (e) => {
        onChange(!checked)
    }

    return (
        <div className={setClass("hw_checkbox", [theme], className)}>
            <div
                onClick={_onChange}
                className="hw_checkbox__input">
                {checked ? 
                <Icon 
                    theme="none"
                    onClick={_onChange} 
                    className="hw_checkbox__icon" 
                    ReactSVG={SVG_Check} /> : null}
            </div>
            <Text 
                className="hw_checkbox__text"
                theme={theme === "light" ? "dark" : "light"}
                size={"small"}
                children={children} />
        </div>
    )
}

export default Checkbox
