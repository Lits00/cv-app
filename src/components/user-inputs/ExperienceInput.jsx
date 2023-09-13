import ExperienceForm from "./ExperienceForm"

export default function ExperienceInput({ data, setExperience }) {

    function handleAddBtn() {
        const newExp = {
            id: crypto.randomUUID(),
            company: '',
            position: '',
            startDate: '',
            endDate: '',
            workLoc: '',
            description: ''
        }
        setExperience([...data, newExp])
    }

    function Button() {
        return <button className="add" onClick={handleAddBtn} >Add Experience</button>
    }

    return (
        <div className="exp-input">
            <h2 className="input-title">Experience</h2>
            {data.map( obj =>
                <ExperienceForm 
                    key={obj.id}
                    id={obj.id}
                    data={obj}
                    setExperience={setExperience}
                /> 
            )}
            {data.length < 3 && <Button />} {/* generates a button that adds exp obj if exp arr is empty */}
        </div>
    )
}