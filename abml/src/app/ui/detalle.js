'use client'
import { useActionState } from "react";

const initialState = {
    message: ''
}

export function Detalle() {
    const [state, formAction] = useActionState(user, initialState);
    
    return (
        <form action={formAction}>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" required />
            <p aria-live="polite">{state?.message}</p>
            <button>{`link ${pathname === '/crear' ? 'Crear' : 'Modificar'}`}</button>
        </form>
    )
}