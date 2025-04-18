import React from 'react'

const CommonButton = ({className, title, justify}) => {
  return (
    <>
      <div className={`text-[#fff] bg-[#9f004f] flex justify-${justify} items-center rounded p-2 mb-3 ${className}`}>
          <h4>{title}</h4>
      </div>
    </>
  )
}

export default CommonButton