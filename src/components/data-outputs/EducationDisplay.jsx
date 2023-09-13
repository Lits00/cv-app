import EducTemplate from "./EducTemplate";

export default function EducationDisplay({ data }) {
    return (
        <>
            <section className="cv-educ">
                {data.length !== 0 && <h3 className="cv-title">Education</h3>}
                {data.map( obj => 
                    <EducTemplate 
                        key={obj.id}
                        data={obj}
                    />    
                )}
            </section>
        </>
    )
}