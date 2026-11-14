import { restrictions } from "../data/restrictions";

interface TastePageProps{
    excluded: string[]
    setExcluded: (value: string[]) => void
}

function TastePage({excluded, setExcluded}: TastePageProps) {
        function toggle(id: string){
        if (excluded.includes(id)) {
            setExcluded(excluded.filter(x => id !== x))
        }
        else {
            setExcluded([...excluded, id])
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
                    checked={(excluded.includes(r.id))}
                    onChange={()=> toggle(r.id) } />
                    {r.label}
                </label>
            </div>
        ))}
            <p>{JSON.stringify(excluded)}</p>
            <p>
                <small>Have an allergy? Always check with the staff.</small>
            </p>
    </div>
)}

export default TastePage

