
export default function PersonalInput({ data, setInfo }) {

    function handlePersonal(e) {
        const { name, value } = e.target;
        setInfo( currentInfo => ({
          ...currentInfo,
          [name]: value,
        }));
      }

    const handleClearBtn = (e) => {
        e.preventDefault()
        setInfo({
            fullName: '',
            jobTitle: '',
            email: '',
            phoneNum: '',
            address: ''
        })
    }

    return (
        <div className="personal-input">
            <h2 className="input-title">Personal Information</h2>
            <form>
                <label htmlFor="fullName">Full Name</label>
                <input type="text" name="fullName" id="fullName" placeholder="John Doe" autoComplete="off"
                    value={data.fullName}
                    onChange={handlePersonal}
                />
                <label htmlFor="jobTitle">Job Title</label>
                <input type="text" name="jobTitle" id="jobTitle" placeholder="Software Engineer" autoComplete="off"
                    value={data.jobTitle}
                    onChange={handlePersonal}
                />
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" placeholder="johndoe@email.com" autoComplete="off"
                    value={data.email}
                    onChange={handlePersonal}
                />
                <label htmlFor="phoneNum">Phone Number</label>
                <input type="text" name="phoneNum" id="phoneNum" placeholder="123-45-6789" autoComplete="off"
                    value={data.phoneNum}
                    onChange={handlePersonal}
                />
                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address" placeholder="City, Country" autoComplete="off"
                    value={data.address}
                    onChange={handlePersonal}
                />
                <input type="button" value="Clear" className="clear"
                    onClick={handleClearBtn}
                />
            </form>
        </div>
    )
}