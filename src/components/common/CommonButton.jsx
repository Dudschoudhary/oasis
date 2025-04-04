import React from 'react'

const CommonButton = ({className, title, justify}) => {
  return (
    <>
      <div className={`text-[#d7b56d] bg-[#00434c] flex justify-${justify} items-center rounded p-2 mb-3 ${className}`}>
          <h4>{title}</h4>
      </div>
    </>
  )
}

export default CommonButton