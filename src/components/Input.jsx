import { forwardRef } from 'react';

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
    return <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
        {textarea ? <textarea ref={ref} className="newproject-input" {...props}/> : <input ref={ref} className="newproject-input" {...props}/>}
    </p>
})

export default Input;