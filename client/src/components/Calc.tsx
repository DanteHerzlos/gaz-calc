import React, { useState } from "react"
import cl from "@styles/components/Calc.module.sass"
import CalcButton from "@components/UI/CalcButton"
import img_1 from "@assets/image_1.png"
import img_2 from "@assets/image_2.png"
import img_3 from "@assets/image_3.png"
import ConsumptionForm from "@components/forms/ConsumptionForm"
import TemperatureForm from "@components/forms/TemperatureForm"
import PressureForm from "@components/forms/PressureForm"

type FormType = "consumption" | "temperature" | "pressure"

const Calc = () => {
  const [activeForm, setActiveForm] = useState<FormType>("consumption")

  return (
    <div className={cl.calc}>
      <div className={cl.calc_tabs}>
        <CalcButton
          active={activeForm === "consumption"}
          onClick={() => setActiveForm("consumption")}
          img={img_1}
        >
          Расход
        </CalcButton>
        <CalcButton
          active={activeForm === "pressure"}
          onClick={() => setActiveForm("pressure")}
          img={img_2}
        >
          Давление
        </CalcButton>
        <CalcButton
          active={activeForm === "temperature"}
          onClick={() => setActiveForm("temperature")}
          img={img_3}
        >
          Температура
        </CalcButton>
      </div>
      <div className={cl.calc_forms}>
        {activeForm === "consumption" && <ConsumptionForm /> }
        {activeForm === "temperature" && <TemperatureForm />}
        {activeForm === "pressure" && <PressureForm />}
      </div>
    </div>
  )
}

export default Calc
