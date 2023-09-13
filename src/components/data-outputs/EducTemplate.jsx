export default function EducTemplate({ data }) {
    return (
        <>
            <section className="cv-container">
                <div className="bold">
                    <p className="cv-degree">{data.degree}</p>
                    <p className="cv-gradDate">{data.gradDate}</p>
                </div>
                <div className="italic">
                    <p className="cv-school">{data.school}</p>
                    <p className="cv-location">{data.location}</p>
                </div>
            </section>
        </>
    )
}