import { restrictions } from "../data/restrictions";
import { tastes } from "../data/tastes"

interface TastePageProps{
    excluded: string[]
    setExcluded: (value: string[]) => void
    ratings: Record<string, number>
    setRatings: (value: Record<string, number>) => void
}

function TastePage({excluded, setExcluded, ratings, setRatings}: TastePageProps) {
        function toggle(id: string){
        if (excluded.includes(id)) {
            setExcluded(excluded.filter(x => id !== x))
        }   else {
            setExcluded([...excluded, id])
            }
        }

        function rate(id: string, value: number){
            setRatings({ ...ratings, [id]: value })
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
            <h2>What do you like?</h2>
            {tastes.map((t) => (
                <div key={t.id}>
                        {t.label} <button onClick={() => rate(t.id, -1)}
                                    disabled={(ratings[t.id] ?? 0) === -1}>👎</button>
                                <button onClick={() => rate(t.id, 0)}
                                    disabled={(ratings[t.id] ?? 0) === 0}>😐</button>
                                <button onClick={() => rate(t.id, 1)} 
                                    disabled={(ratings[t.id] ?? 0) === 1}>👍</button>
                </div>
            ))}
            <p>{JSON.stringify(ratings)}</p>
            <p>
                <small>Have an allergy? Always check with the staff.</small>
            </p>
    </div>
)}

export default TastePage

