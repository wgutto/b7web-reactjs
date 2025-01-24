import { Circle } from "./Circle"
import { Rectangle } from "./Rectangle"
import { Square } from "./Square"
import { Triangle } from "./Triangle"

export const GeoForms = () => {
    return (
        <div className="flex gap-2 p-4 m-2 border-2">
            <Square/>
            <Rectangle/>
            <Circle/>
            <Triangle/>
        </div>
    )
}