import React from 'react'
import Info from "./Info"

const ControlledInfo = () => {
    const lang=["Java","JavaScript","Python","Kotlin"]
  return (
    <div>
        <Info lang={lang}/>
    </div>
  )
}

export default ControlledInfo