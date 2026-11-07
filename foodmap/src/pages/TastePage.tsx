import { restrictions } from "../data/restrictions";
import { useState } from "react" ;

function TastePage() {
    const [selected, setSelected] = useState<string[]>([])
    return(
        <div>
        <h1>What don’t you eat?</h1>
        <p>Pick everything that applies. You can skip this step.</p>
        {restrictions.map((r) => (
            <div key={r.id}>
                <label>
                    <input type="checkbox" />
                    {r.label}
                </label>
            </div>
        ))}
            <p>
                <small>Have an allergy? Always check with the staff.</small>
            </p>
    </div>
)}
export default TastePage

