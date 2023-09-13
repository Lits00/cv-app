

export default function PersonalDisplay({ data }) {
    return (
        <>
            <section className="cv-personal">
                <h2>{data.fullName}</h2>
                <h3>{data.jobTitle}</h3>
                <div>
                    <p>
                        {data.email !== '' && <span className="material-symbols-rounded">mail</span>}
                        {data.email}
                    </p>
                    <p>
                        {data.phoneNum !== '' && <span className="material-symbols-rounded">call</span>}
                        {data.phoneNum}
                    </p>
                    <p>
                        {data.address !== '' && <span className="material-symbols-rounded">location_on</span>}
                        {data.address}
                    </p>
                </div>
                <hr />
            </section>
        </>
    )
}