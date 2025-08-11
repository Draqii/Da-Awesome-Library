import React from "react";
import { setClass } from "../../modules/setClass";
import { TextareaProps } from "./Textarea.types";
import SVG_Edit from "../../../public/svgs/edit.svg"
import Icon from "../a_Icon/Icon";
import "./Textarea.scss";

const Textarea = ({isPassword, value, onChange, placeholder, theme, className, rows}: TextareaProps) => {

    const _onChange = (e) => {
        onChange(e.target.value)
    }

    return (
        <div className={setClass("hw_textarea", [theme], className)}>
            <Icon
                className="hw_textarea__icon"
                theme={theme === "light" ? "dark" : "light"} 
                ReactSVG={SVG_Edit} />
            <textarea 
                className="hw_textarea__input" 
                onChange={_onChange}
                value={value}
                placeholder={placeholder}
                rows={rows} />
        </div>
    )
}

export default Textarea
