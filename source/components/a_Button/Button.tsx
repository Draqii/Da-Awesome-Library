import React from "react";
import Text from "../a_Text/Text";
import { setClass } from "../../modules/setClass";
import { ButtonProps } from "./Button.types";
import "./Button.scss";

const Button = ({isPrimary, children, onClick, theme, className}: ButtonProps) => {

    const onButtonClick = (e) => {
        e.preventDefault()
        onClick()
    }

    return (
        <button onClick={onButtonClick} className={setClass("hw_button", [theme, isPrimary?"primary":""], className)}>
            <Text size={"medium"} theme={theme}>{children}</Text>
        </button>
    )
}

export default Button
