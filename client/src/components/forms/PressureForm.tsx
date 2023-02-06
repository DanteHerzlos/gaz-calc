import React, { useMemo } from "react"
import cl from "@styles/components/forms/CalcForm.module.sass"
import Label from "@components/UI/Label"
import Input from "@components/UI/Input"
import { SubmitHandler, useForm } from "react-hook-form"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import IPressure from "types/IPressure"
import {
  calcPressures,
  pressureClearError,
} from "@store/reducers/pressure/ActionCreators"
import useTimeout from "hooks/useTimeout"
import ErrorMessage from "@components/UI/ErrorMessage"

const PressureForm = () => {
  const timerRef = useTimeout()
  const dispatch = useAppDispatch()
  const { isLoading, pressures, error } = useAppSelector(
    (state) => state.pressureReducer
  )
  const { register, handleSubmit, setValue } = useForm<IPressure>({
    shouldUseNativeValidation: true,
  })
  
  useMemo(() => {    
    setValue("pascal", pressures.pascal)
    setValue("bar", pressures.bar)
    setValue("atm", pressures.atm)
    setValue("ata", pressures.ata)
  }, [pressures.pascal, pressures.bar, pressures.atm, pressures.ata])

  const onSubmit: SubmitHandler<IPressure> = (_, e) => {
    const name = e?.target.name
    const number = e?.target.value
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      dispatch(calcPressures(name, number))
    }, 500)
  }

  return (
    <>
      {error && (
        <ErrorMessage
          className={cl.errorMessage}
          onClick={() => dispatch(pressureClearError())}
          message={error}
        />
      )}
      <form className={cl.form}>
        <div className={cl.form_input}>
          <Label value="Па" />
          <Input
            isLoading={isLoading}
            placeholder="Введите число"
            register={{
              ...register("pascal", {
                pattern: {
                  value: /^[-]{0,1}\d+[\.]{0,1}\d*$/,
                  message: "Только числовой формат!",
                },
                onChange: handleSubmit(onSubmit),
              }),
            }}
          />
        </div>
        <div className={cl.form_input}>
          <Label value="бар" />
          <Input
            isLoading={isLoading}
            placeholder="Введите число"
            register={{
              ...register("bar", {
                pattern: {
                  value: /^[-]{0,1}\d+[\.]{0,1}\d*$/,
                  message: "Только числовой формат!",
                },
                onChange: handleSubmit(onSubmit),
              }),
            }}
          />
        </div>
        <div className={cl.form_input}>
          <Label value="ата" />
          <Input
            isLoading={isLoading}
            placeholder="Введите число"
            register={{
              ...register("ata", {
                pattern: {
                  value: /^[-]{0,1}\d+[\.]{0,1}\d*$/,
                  message: "Только числовой формат!",
                },
                onChange: handleSubmit(onSubmit),
              }),
            }}
          />
        </div>
        <div className={cl.form_input}>
          <Label value="атм" />
          <Input
            isLoading={isLoading}
            placeholder="Введите число"
            register={{
              ...register("atm", {
                pattern: {
                  value: /^[-]{0,1}\d+[\.]{0,1}\d*$/,
                  message: "Только числовой формат!",
                },
                onChange: handleSubmit(onSubmit),
              }),
            }}
          />
        </div>
      </form>
    </>
  )
}

export default PressureForm
