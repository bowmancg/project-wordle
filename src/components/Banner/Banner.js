import React from "react";

function Banner({status, children, action, actionText}) {
    return (
    <div className={`${status} banner`}>
        {children}
        {action && <button onClick={action}>{actionText}</button>}
        </div>
    )
}

export default Banner