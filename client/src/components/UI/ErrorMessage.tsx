import React from "react"
import cl from "@styles/components/UI/ErrorMessage.module.sass"

interface ErrorMessageProps {
  message: string
  className?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  className,
  onClick,
}) => {
  return (
    <div onClick={onClick} className={[cl.message, className].join(" ")}>
      {message}
    </div>
  )
}

export default ErrorMessage
