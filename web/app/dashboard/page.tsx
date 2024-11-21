"use client";
import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import {Slider} from "@nextui-org/react";
import Example from "@/components/chart"

export default function Home() {
  return (
    <NextUIProvider>
      <div className="prose dark:prose-invert min-w-[55rem]">
        <h1 className="mt-10">
          Dilemma game Parameters
        </h1>
        <div className="flex flex-row justify-around">
          <div className="flex flex-col w-80">
            <Slider size="lg" step={1} color="primary" label="Tentation"
            showSteps={true} maxValue={7} minValue={0} defaultValue={5}
            className="max-w-md" 
            />
            <Slider size="lg" step={1} color="primary" label="Cooperation"
            showSteps={true} maxValue={7} minValue={0} defaultValue={3}
            className="max-w-md" 
            />
          </div>
          <div className="flex flex-col w-80">
            <Slider size="lg" step={1} color="primary" label="Punishment"
            showSteps={true} maxValue={7} minValue={0} defaultValue={1}
            className="max-w-md" 
            />
            <Slider size="lg" step={1} color="primary" label="Duperie"
            showSteps={true} maxValue={7} minValue={0} defaultValue={0}
            className="max-w-md" 
            />
          </div>
        </div>
        <h1 className="mt-10">
          Arena Parameters
        </h1>
        <div className="flex flex-row justify-around">
            <Slider size="lg" step={1} color="primary" label="Population"
            showSteps={false} maxValue={500} minValue={20} defaultValue={100}
            className="max-w-sm" 
            />
            <Slider size="lg" step={1} color="primary" label="Nb of rounds"
            showSteps={false} maxValue={500} minValue={20} defaultValue={100}
            className="max-w-sm" 
            />
        </div>
        <h1 className="mt-10">
          Arena Results
        </h1>
        <Example></Example>
      </div>
    </NextUIProvider>
  )
}