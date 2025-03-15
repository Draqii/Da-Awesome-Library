import React from "react";
import { setClass } from "../../modules/setClass";
import Text from "../a_Text/Text";
import { ParagraphProps } from "./Paragraph.types";
import "./Paragraph.scss";

const Paragraph = ({onClick, size, children, theme, className}: ParagraphProps) => {

    const _onClick = () => {
        if(onClick) onClick()
    }

    return (
        <p onClick={_onClick} className={setClass("hw_paragraph", [theme, size], className)}>
            <Text size={size} theme={theme}>{children}</Text>
        </p>
    )
}

export default Paragraph
