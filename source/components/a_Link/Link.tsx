import React from "react";
import { setClass } from "../../modules/setClass";
import { LinkProps } from "./Link.types";
import { Link as ReactLink } from "react-router-dom";
import Text from "../a_Text/Text";
import "./Link.scss";

const Link = ({target, children, isInternal, to, theme, className}: LinkProps) => {

    const scrollToTop = () => {
        window.scrollTo({
            behavior: "smooth",
            left: 0,
            top: 0
        })
    }

    return (
        isInternal ? 
        <ReactLink 
            onClick={() => scrollToTop()}
            target={!target ? "_self" : target}
            className={setClass("hw_link", [theme], className)} 
            to={to}>
            <Text 
            theme={theme}
            size={"small"}
            >{children}</Text>
        </ReactLink> :
        <a 
            target={!target ? "_self" : target}
            className={setClass("hw_link", [theme], className)} 
            href={to}>
            <Text 
            theme={theme}
            size={"small"}
            >{children}</Text>
        </a>
    )
}

export default Link
