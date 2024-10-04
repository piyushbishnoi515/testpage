import React from 'react'

const CommonHeading = ({ heading, className }) => {
    return (
        <h2 className={` font-Messiri font-bold text-custom-xl leading-[48px] text-center text-deep-blue  ${className}`}>{heading}</h2>
    )
}

export default CommonHeading