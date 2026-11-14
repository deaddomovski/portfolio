import { restrictions } from "../data/restrictions";
import { useState } from "react" ;

function TastePage() {
    const [selected, setSelected] = useState<string[]>([])

    function toggle(id: string){
        if (selected.includes(id)) {
            setSelected(selected.filter(x => id !== x))
        }
        else {
            setSelected([...selected, id])
        }
    }
    return(
        <div>
        <h1>What don’t you eat?</h1>
        <p>Pick everything that applies. You can skip this step.</p>
        {restrictions.map((r) => (
            <div key={r.id}>
                <label>
                    <input type="checkbox"
                    checked={(selected.includes(r.id))}
                    onChange={()=> toggle(r.id) } />
                    {r.label}
                </label>
            </div>
        ))}
            <p>{JSON.stringify(selected)}</p>
            <p>
                <small>Have an allergy? Always check with the staff.</small>
            </p>
    </div>
)}
export default TastePage

