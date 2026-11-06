import type { Mode } from '../utils/combos'

type SwitchModeProps = {
    mode: Mode
    setMode: (m:Mode) => void
}

function ModeSwitcher({mode, setMode}: SwitchModeProps) {
    const modes: Mode[] = ["cheap", "balanced", "gourmet"]

    return (
    <div>
        {modes.map((m) => (
            <button
                key={m}
                onClick={() => setMode(m)}
                disabled={m === mode}
            >
                {m}
            </button>
        ))}
    </div>
    )
}

export default ModeSwitcher