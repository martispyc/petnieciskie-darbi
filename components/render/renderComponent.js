import Heading from './Heading'
import React from 'react'

const keyToComponentMap = {
    "Heading": Heading,
    "h1": "h1"
}

export const renderComponent = (config) => {
    if (typeof keyToComponentMap[config.type] !== 'undefined') {
        return React.createElement(
            keyToComponentMap[config.type],
            config.props,
            config.children && (typeof config.children === 'string' 
                ? config.children : 
                config.children.map(c => renderComponent(c)))
        )
    }
}