import { useState } from "react";
import PersonalDisplay from "./components/data-outputs/PersonalDisplay";
import PersonalInput from "./components/user-inputs/PersonalInput";
import ExperienceDisplay from "./components/data-outputs/ExperienceDisplay";
import ExperienceInput from "./components/user-inputs/ExperienceInput";
import EducationInput from "./components/user-inputs/EducationInput";
import EducationDisplay from "./components/data-outputs/EducationDisplay";
import Menu from "./components/user-inputs/Menu";

export default function App() {
  const [info, setInfo] = useState({
    fullName: '',
    jobTitle: '',
    email: '',
    phoneNum: '',
    address: ''
  })
  const [experience, setExperience] = useState([])
  const [education, setEducation] = useState([])

  return (
    <>
      <section className="user-input">
        <Menu 
          setInfo={setInfo}
          setExp={setExperience}
          setEduc={setEducation}
        />
        <PersonalInput 
          data={info}
          setInfo={setInfo}
        />
        <ExperienceInput 
          data={experience}
          setExperience={setExperience}
        />
        <EducationInput 
          data={education}
          setEducation={setEducation}
        />
      </section>
      <main className="resume">
        <PersonalDisplay 
          data={info}
        />
        <ExperienceDisplay 
          data={experience}
        />
        <EducationDisplay 
          data={education}
        />
      </main>
    </>
  )
}