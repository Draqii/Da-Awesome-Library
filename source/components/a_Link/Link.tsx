import React from "react";
import { setClass } from "../../modules/setClass";
import { LinkProps } from "./Link.types";
import { Link as ReactLink } from "react-router-dom";
import Text from "../a_Text/Text";
import "./Link.scss";

const Link = ({filename, copyLink, target, children, isInternal, to, theme, className}: LinkProps) => {

    const handleClick = (e) => {
        if (!copyLink || filename) return
        e.preventDefault();
        navigator.clipboard.writeText(copyLink);
    };

    return (
        isInternal ? 
        <ReactLink 
            onClick={(e) => handleClick(e)}
            target={!target ? "_self" : target}
            className={setClass("hw_link", [theme], className)} 
            download={filename}
            to={to}>
            <Text 
            theme={theme}
            size={"small"}
            >{children}</Text>
        </ReactLink> :
        <a 
            onClick={(e) => handleClick(e)}
            target={!target ? "_self" : target}
            className={setClass("hw_link", [theme], className)} 
            download={filename}
            href={to}>
            <Text 
            theme={theme}
            size={"small"}
            >{children}</Text>
        </a>
    )
}

export default Link
