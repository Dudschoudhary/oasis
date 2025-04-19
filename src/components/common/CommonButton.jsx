import React from 'react'

const CommonButton = ({className, title, justify}) => {
  return (
    <>
      <div className={`text-[#fff] bg-[#9f004f] flex justify-${justify} items-center rounded p-2 mb-3 hover:shadow-[2px_2px_4px_1px_#ccc] cursor-pointer hover:bg-[#fff] border border-[#ccc] hover:text-[#9f004f] ${className}`}>
          <h4>{title}</h4>
      </div>
    </>
  )
}

export default CommonButton