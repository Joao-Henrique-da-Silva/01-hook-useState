import { useState } from "react"

export const Count = () => {
    const [initialValue, setInitialValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [count, setCount] = useState(0)
    const [started, setStarted] = useState(false)

    // MELHORIA 1: Validar initialValue ao iniciar
    const handleStart = () => {
        const validInitial = Math.min(initialValue, maxValue) // Garante que não ultrapassa max
        setCount(validInitial)
        setStarted(true)
    }

    const handleIncrease = () => {
        if (count < maxValue) {
            setCount(count + 1)
        }
    }

    const handleDecrease = () => {
        if (count > 0) { // MELHORIA 2: Limita em 0 (já estava ok)
            setCount(count - 1)
        }
    }

    if (!started) {
        return (
            <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
                <h1>Configurar Contador</h1>

                <div>
                    <label>Valor inicial: </label>
                    <input
                        type="number"
                        value={initialValue}
                        onChange={(e) => setInitialValue(Number(e.target.value))}
                        min="0" // MELHORIA 3: Impede valores negativos
                    />
                </div>

                <div>
                    <label>Valor máximo: </label>
                    <input
                        type="number"
                        value={maxValue}
                        onChange={(e) => setMaxValue(Number(e.target.value))}
                        min="1" // MELHORIA 4: Máximo não pode ser menor que 1
                    />
                </div>

                {/* MELHORIA 5: Feedback visual para o usuário */}
                {initialValue > maxValue && (
                    <p style={{ color: "orange" }}>
                        ⚠️ Valor inicial não pode ser maior que o valor máximo
                    </p>
                )}

                <button 
                    onClick={handleStart} 
                    style={{ marginTop: "10px" }}
                    disabled={initialValue > maxValue} // MELHORIA 6: Desabilita se inválido
                >
                    Iniciar Contador
                </button>
            </div>
        )
    }

    return (
        <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
            <h2>Contador: {count}</h2>

            {/* MELHORIA 7: Desabilitar botões quando necessário */}
            <button 
                onClick={handleDecrease} 
                style={{ marginRight: "10px" }}
                disabled={count === 0}
            >
                -
            </button>
            <button 
                onClick={handleIncrease}
                disabled={count === maxValue}
            >
                +
            </button>

            {count === maxValue && (
                <p style={{ color: "red" }}>Você atingiu o valor máximo!</p>
            )}
        </div>
    )
}