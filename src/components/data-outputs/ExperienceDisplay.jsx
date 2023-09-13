import ExpTemplate from "./ExpTemplate";

export default function ExperienceDisplay({ data }) {

    return (
        <>
            <section className="cv-exp">
                { data.length !== 0 && <h3 className="cv-title">Experience</h3>}
                {data.map( obj => 
                    <ExpTemplate 
                        key={obj.id}
                        data={obj}
                    />
                )}
            </section>
        </>
    )
}