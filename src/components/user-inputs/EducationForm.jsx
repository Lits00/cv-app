export default function EducationForm({ id, data , setEducation}) {

    function handleChange(e) {
        const { name, value } = e.target;
        setEducation(currentEd => {
            return currentEd.map( obj => (obj.id === id) ? { ...obj, [name]: value } : obj );
        })
    }

    function handleClearBtn() {
        setEducation( currentEd => {
            return currentEd.map( obj => (obj.id === id ) ? {
                id: crypto.randomUUID(),
                school: '',
                degree: '',
                gradDate: '',
                location: ''
            } : obj )
        })
    }

    function handleDeleteBtn() {
        setEducation( currentEd => {
            return currentEd.filter( obj => obj.id !== id )
        })
    }

    return (
        <>
            <form>
                <label htmlFor="school">School</label>
                <input type="text" name="school" id="school" placeholder="School/University" 
                    value={data.school}
                    onChange={handleChange}
                />
                <label htmlFor="degree">Degree</label>
                <input type="text" name="degree" id="degree" placeholder="Enter Degree" 
                    value={data.degree}
                    onChange={handleChange}
                />
                <label htmlFor="gradDate">Date of Graduation</label>
                <input type="text" name="gradDate" id="gradDate" placeholder="Month, Year" 
                    value={data.gradDate}
                    onChange={handleChange}
                />
                <label htmlFor="location">Location</label>
                <input type="text" name="location" id="location" placeholder="City, Country" 
                    value={data.location}
                    onChange={handleChange}
                />
                <div className="btns">
                    <input type="button" value="Clear" className="clear"
                        onClick={handleClearBtn}
                    />
                    <input type="button" value="Delete" className="delete"
                        onClick={handleDeleteBtn}
                    />
                </div>
            </form>
        </>
    )
}