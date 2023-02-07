import React, { useMemo } from "react"
import cl from "@styles/components/forms/CalcForm.module.sass"
import Label from "@components/UI/Label"
import Input from "@components/UI/Input"
import { useAppDispatch, useAppSelector } from "@hooks/redux"
import { SubmitHandler, useForm } from "react-hook-form"
import ITemperature from "types/ITemperature"
import {
  calcTemperatures,
  temperatureClearError,
} from "@store/reducers/temperature/ActionCreators"
import useTimeout from "@hooks/useTimeout"
import ErrorMessage from "@components/UI/ErrorMessage"

const TemperatureForm = () => {
  const timerRef = useTimeout()
  const dispatch = useAppDispatch()
  const { isLoading, error, temperatures } = useAppSelector(
    (state) => state.temperatureReducer
  )
  const { register, handleSubmit, setValue } = useForm<ITemperature>({
    shouldUseNativeValidation: true,
  })

  useMemo(() => {
    setValue("celsius", temperatures.celsius)
    setValue("fahrenheit", temperatures.fahrenheit)
    setValue("kelvin", temperatures.kelvin)
  }, [temperatures.celsius, temperatures.fahrenheit, temperatures.kelvin])

  const onSubmit: SubmitHandler<ITemperature> = (_, e) => {
    const name = e?.target.name
    const number = e?.target.value
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      dispatch(calcTemperatures(name, number))
    }, 500)
  }

  return (
    <>
      {error && (
        <ErrorMessage
          className={cl.errorMessage}
          onClick={() => dispatch(temperatureClearError())}
          message={error}
        />
      )}
      <form data-testid="temp-form" className={cl.form}>
        <div className={cl.form_input}>
          <Label value="Кельвин" />
          <Input
            data-testid="first-input"
            isLoading={isLoading}
            placeholder="Введите число"
            register={{
              ...register("kelvin", {
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
          <Label value="Цельсия" />
          <Input
            isLoading={isLoading}
            placeholder="Введите число"
            register={{
              ...register("celsius", {
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
          <Label value="Фаренгейт" />
          <Input
            isLoading={isLoading}
            placeholder="Введите число"
            register={{
              ...register("fahrenheit", {
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

export default TemperatureForm
