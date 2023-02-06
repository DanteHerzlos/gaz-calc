import React, { ReactElement } from "react"
import cl from "@styles/components/UI/CalcButton.module.sass"

interface CalcButtonProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>
  active?: boolean
  children?: ReactElement | string
  img?: string
}

const CalcButton: React.FC<CalcButtonProps> = ({
  img,
  children,
  onClick,
  active,
}) => {
  return (
    <div
      onClick={onClick}
      className={active ? [cl.btn, cl._active].join(" ") : cl.btn}
    >
      <span
        className={active ? [cl.btn_text, cl._active].join(" ") : cl.btn_text}
      >
        {children}
      </span>
      <div>
        <img className={cl.btn_img} src={img} alt="" />
      </div>
    </div>
  )
}

export default CalcButton
