import type { Dispatch, SetStateAction } from "react"
import { OrderActions } from "../reducers/order-reducer"

const tipOptions = [
    {
        id: 'tip-10',
        value: .03,
        label: '3%'
    },
    {
        id: 'tip-20',
        value: .05,
        label: '5%'
    },
    {
        id: 'tip-50',
        value: .09,
        label: '9%'
    },
]

type TippercentageFormProps = {
    dispatch: Dispatch<OrderActions>,
    tip: number

}

export default function TippercentageForm({ dispatch, tip }: TippercentageFormProps) {
    return (
        <div>
            <h3 className="font-black text-2xl">Propina:</h3>


            <form>
                {tipOptions.map(tipOption => (
                    <div key={tipOption.id} className="flex gap-2">
                        <label htmlFor={tipOption.id}>{tipOption.label}</label>
                        <input
                            id={tipOption.id}
                            type="radio"
                            name="tip"
                            value={tipOption.value}
                            onChange={e => dispatch({ type: 'add-tip', payload: { value: +e.target.value } })}
                            checked={tipOption.value === tip}
                        />
                    </div>
                ))}

            </form>
        </div>
    )
}
