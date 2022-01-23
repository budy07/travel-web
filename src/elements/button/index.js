import React from 'react';

import {Link} from 'react-router-dom';
import propTypes from 'prop-types';

export default function Button(props) {
    const className = [props,className]
    if (props.isPimary) className.push("btn-primary");
    if (props.isLarge) className.push("btn-lg");
    if (props.isSmall) className.push("btn-sm");
    if (props.isBlock) className.push("btn-block");
    if (props.hasShadow) className.push("btn-shadow");

    const onclick = () => {
        if(props.onclick) props.onclick()
    }

    if(props.isDisabled || props.isLoading){
        if(props.isDisabled) className.push("disabled");    
        return(
            <span className={className.join(" ")}style={props.style}>
                {props.isLoading ? (
                    <>
                        <span className="spniner-border spinner-border-sm mx-5"></span>
                        <span className="sr-only">Loading...</span>
                    </>
                ):(
                    props.children
                )}
            </span>
        ); 
    }
 

    if(props.type === "link"){
        if(props.isExternal){
            return(
                <a href={props.href} 
                className={className.join(" ")} 
                style={props.style} 
                target={props.target==="_blank" ? "_blank":undefined} 
                rel={props.target === "_blank" ?"noopener noreferrer":undefined}
                >
                {props.children}</a>
            )    
        }else{
            return(
                <Link to={props.href}
                    className={className.join (" ")}
                    style={props.style} onclick={onclick}>
                {props.children}
                </Link>
            )
        }
         
    }
    
  return <button className={className.join (" ")}
            style={props.style} 
            onclick={onclick}>{props.children}</button>;

}

Button.prototype = {
    type: prototype.oneOf(["button","link"]),
    onclick: prototype.func,
    target: prototype.string,
    className: prototype.string,
    href: prototype.string,
    isDisabled: prototype.bool,
    isLoading: prototype.bool,
    isSmall: prototype.bool,
    isLarge: prototype.bool,
    isBlock: prototype.bool,
    hasShadow: prototype.bool
}