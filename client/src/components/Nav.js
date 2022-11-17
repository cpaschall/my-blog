import React from "react";

export default function Nav() {
    return (
        <div className="nav-links" style={{display: "flex", flexDirection: "column", padding: "2%"}}>
            <p>logo here</p>
            <a href="#">login</a>
            <a href="#">portfolio</a>
            <a href="#">about</a>
            <a href="#">contact me</a>
            <a href="#">topics</a>
            {/* dropdown: https://codesandbox.io/embed/reach-ui-hover-dropdown-bzid5 */}
        </div>
    )
}