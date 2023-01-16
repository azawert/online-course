import React from "react";
import {IFooterProps} from "./Footer.props";

const Footer = ({...props}: IFooterProps): JSX.Element => {
    return (
        <div {...props}>
            footer
        </div>
    );
};

export default Footer;
