import React from 'react'
import cl from '@styles/components/UI/Label.module.sass'

interface LabelProps {
  className?: string
  value?: string
}

const Label:React.FC<LabelProps> = ({ className, value }) => {
  return <div className={[className, cl.label].join(" ")}>{value}</div>
}

export default Label