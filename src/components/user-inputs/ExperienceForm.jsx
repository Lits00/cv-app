
export default function ExperienceForm({ id, data, setExperience }) {

    function handleChange(e) {
        const { name, value } = e.target;
        setExperience(currentExp => {
            return currentExp.map( obj => (obj.id === id) ? { ...obj, [name]: value } : obj );
        })
    }

    function handleClearBtn() {
        setExperience( currentExp => {
            return currentExp.map( obj => (obj.id === id ) ? {
                id: crypto.randomUUID(),
                  company: '',
                  position: '',
                  startDate: '',
                  endDate: '',
                  workLoc: '',
                  description: ''
            } : obj )
        })
    }

    function handleDeleteBtn() {
        setExperience( currentExp => {
            return currentExp.filter( obj => obj.id !== id )
        })
    }

    return (
        <>
            <form>
                <label htmlFor="company">Company</label>
                <input type="text" name="company" id="company" placeholder="Company A Inc." autoComplete="off"
                    value={data.company}
                    onChange={handleChange}
                />
                <label htmlFor="position">Position</label>
                <input type="text" name="position" id="position" placeholder="Software Engineer" autoComplete="off"
                    value={data.position}
                    onChange={handleChange}
                />
                <label htmlFor="startDate">Start Date</label>
                <input type="text" name="startDate" id="startDate" placeholder="Month, Year" autoComplete="off"
                    value={data.startDate}
                    onChange={handleChange}
                />
                <label htmlFor="endDate">End Date</label>
                <input type="text" name="endDate" id="endDate" placeholder="Month, Year / Present" autoComplete="off"
                    value={data.endDate}
                    onChange={handleChange}
                />
                <label htmlFor="workLoc">Location</label>
                <input type="text" name="workLoc" id="workLoc" placeholder="City, Country / Remote" autoComplete="off"
                    value={data.workLoc}
                    onChange={handleChange}
                />
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" placeholder="Enter role responsibilities" rows="5"
                    value={data.description}
                    onChange={handleChange}
                ></textarea>
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