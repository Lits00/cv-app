import { sampleData } from "../sample-cv"

export default function Menu({ setInfo, setExp, setEduc }) {

    function handleLoad() {
        setInfo(sampleData.personalInfo)
        setExp(sampleData.experience)
        setEduc(sampleData.education)
    }

    function handleReset() {
        setInfo({
            fullName: '',
            jobTitle: '',
            email: '',
            phoneNum: '',
            address: ''
        })
        setExp([])
        setEduc([])
    }

    return (
        <div className="menuBtn">
            <button className="sample" onClick={handleLoad}>Load Sample</button>
            <button className="reset" onClick={handleReset}>Reset</button>
        </div>
    )
}