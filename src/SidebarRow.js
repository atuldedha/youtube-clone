import React from 'react'
import "./SidebarRow.css"

const SidebarRow = ({selected, title, Icon}) => {
    return (
        <div className = {`sidebarrow ${selected && 'selected'}`}>
            <Icon className = "sidebarrow__icon" />
            <h2 className = "sidebarrow__title">{title}</h2>
        </div>
    )
}

export default SidebarRow
