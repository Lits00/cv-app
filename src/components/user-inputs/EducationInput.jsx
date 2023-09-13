import EducationForm from "./EducationForm";

export default function EducationInput({ data, setEducation }) {

    function handleAddBtn() {
        const newEd = {
            id: crypto.randomUUID(),
            school: '',
            degree: '',
            gradDate: '',
            location: ''
        }
        setEducation([...data, newEd])
    }

    function Button() {
        return <button className="add" onClick={handleAddBtn} >Add Experience</button>
    }

    return (
        <div className="educ-input">
            <h2 className="input-title">Education</h2>
            {data.map( obj => <EducationForm key={obj.id} id={obj.id} data={obj} setEducation={setEducation} />)}
            {data.length < 2 && <Button />}
        </div>
    )
}