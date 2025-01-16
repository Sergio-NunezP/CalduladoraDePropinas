import type { Dispatch, SetStateAction } from "react"

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
    setTip: Dispatch<SetStateAction<number>>

}

export default function TippercentageForm({ setTip }: TippercentageFormProps) {
    return (
        <div>
            <h3 className="font-black text-2xl">Propina:</h3>


            <form>
                {tipOptions.map(tip => (
                    <div key={tip.id} className="flex gap-2">
                        <label htmlFor="">{tip.label}</label>
                        <input
                            id={tip.id}
                            type="radio"
                            name="tip"
                            value={tip.value}
                            onChange={e => setTip(+e.target.value)}

                        />
                    </div>
                ))}

            </form>
        </div>
    )
}
