import React, { useEffect, useState } from "react";
import { setClass } from "../../modules/setClass";
import { DropDownProps } from "./DropDown.types";
import texts from "./DropDown.json"
import "./DropDown.scss";
import { Paragraph, Text } from "da-awesome-library/build";

const DropDown = ({onChange, value, label, options, language, theme, className}: DropDownProps) => {

    const [option, setOption] = useState(value)
    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        if(expanded) setExpanded(false)
        onChange(option)
    }, [option])

    const sortOptions = () => {
        let unticked_options = options.map((_option, option_id) => option !== _option ? _option : null).filter(n => n)
        let ticked_option = options.map((_option, option_id) => option === _option ? _option : null).filter(n => n)[0]
        console.log(ticked_option)
        return ({
            unticked: unticked_options,
            ticked: ticked_option
        })
    }

    return (
        <div className={setClass("hw_dropdown", [theme], className)}>
            <Text className="hw_dropdown__label" size={"medium"} children={label} theme={"light"} />
            <div className="hw_dropdown__options">
                <Paragraph className={"hw_dropdown__option hw_dropdown__option--active"} size={"medium"} children={sortOptions().ticked} onClick={() => setExpanded(!expanded)} theme={"light"} />
                
                {!expanded ? null : sortOptions().unticked.map((_option, option_id) => 
                <Paragraph className={"hw_dropdown__option"} size={"medium"} children={_option} onClick={() => setOption(_option)} theme={"light"} />
                )}
            </div>
        </div>
    )
}

export default DropDown
