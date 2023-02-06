import React, { InputHTMLAttributes } from "react"
import cl from "@styles/components/UI/Input.module.sass"
import { UseFormRegisterReturn } from "react-hook-form"
import Spinner from "./Spinner"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn
  isLoading?: boolean
}

const Input: React.FC<InputProps> = ({ register, isLoading, ...rest }) => {
  return (
    <div className={cl.container}>
      {isLoading && <Spinner className={cl.spinner} />}
      <input {...rest} {...register} className={cl.input} />
    </div>
  )
}

export default Input
