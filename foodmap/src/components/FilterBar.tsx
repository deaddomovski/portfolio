type FilterBarProps = {
    selected: string
    onSelect: (cuisine:string) => void
}

function FilterBar({selected, onSelect}: FilterBarProps) {
    const cuisines = [ 'All', 'Georgian', 'Italian','Japanese' ] 

    return (
    <div>
        {cuisines.map((cuisine) => (
            <button
                key={cuisine}
                onClick={() => onSelect(cuisine)}
                disabled={cuisine === selected}
            >
                {cuisine}
            </button>
        ))}
    </div>
    )
}

export default FilterBar