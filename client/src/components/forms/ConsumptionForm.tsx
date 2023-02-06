import React, { useMemo } from "react"
import cl from "@styles/components/forms/CalcForm.module.sass"
import Label from "@components/UI/Label"
import Input from "@components/UI/Input"
import { SubmitHandler, useForm } from "react-hook-form"
import IConsumption from "types/IConsumption"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import {
  calcConsumptions,
  consumptionClearError,
} from "@store/reducers/consumption/ActionCreators"
import useTimeout from "hooks/useTimeout"
import ErrorMessage from "@components/UI/ErrorMessage"

const ConsumptionForm = () => {
  const timerRef = useTimeout()
  const dispatch = useAppDispatch()
  const { isLoading, error, consumptions } = useAppSelector(
    (state) => state.consumptionReducer
  )
  const { register, handleSubmit, setValue } = useForm<IConsumption>({
    shouldUseNativeValidation: true,
  })

  
  useMemo(() => {
    setValue("perSec", consumptions.perSec)
    setValue("perHour", consumptions.perHour)
    setValue("perDay", consumptions.perDay)
    setValue("perYear", consumptions.perYear)
  }, [
    consumptions.perYear,
    consumptions.perSec,
    consumptions.perHour,
    consumptions.perDay,
  ])

  const onSubmit: SubmitHandler<IConsumption> = (_, e) => {
    const name = e?.target.name
    const number = e?.target.value
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      dispatch(calcConsumptions(name, number))
    }, 500)
  }

  return (
    <>
      {error && (
        <ErrorMessage
          className={cl.errorMessage}
          onClick={() => dispatch(consumptionClearError())}
          message={error}
        />
      )}

      <form onSubmit={handleSubmit(onSubmit)} className={cl.form}>
        <div className={cl.form_input}>
          <Label value="м³/сек" />
          <Input
            isLoading={isLoading}
            placeholder="Введите число"
            register={{
              ...register("perSec", {
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
          <Label value="тыс м³/час" />
          <Input
            isLoading={isLoading}
            placeholder="Введите число"
            register={{
              ...register("perHour", {
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
          <Label value="млн м³/сут" />
          <Input
            isLoading={isLoading}
            placeholder="Введите число"
            register={{
              ...register("perDay", {
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
          <Label value="млрд м³/год" />
          <Input
            isLoading={isLoading}
            placeholder="Введите число"
            register={{
              ...register("perYear", {
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

export default ConsumptionForm
