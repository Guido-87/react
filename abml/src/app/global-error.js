'use client'

export default function GlobalError({error, reset}) {
    return (
        <html>
            <body>
                <h2>Algo salió mal.</h2>
                <button onClick={() => reset()}>Reintentar</button>
            </body>
        </html>
    )
}