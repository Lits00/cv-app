
export default function ExpTemplate({ data }) {
    return (
        <>
            <section className="cv-container">
                <div className="bold">
                    <p className="cv-position">{data.position}</p>
                    <p className="cv-duration">{`${data.startDate} - ${data.endDate}`}</p>
                </div>
                <div className="italic">
                    <p className="cv-company">{data.company}</p>
                    <p className="cv-location">{data.location}</p>
                </div>
                <p className="cv-description">{data.description}</p>
            </section>
        </>
    )
}