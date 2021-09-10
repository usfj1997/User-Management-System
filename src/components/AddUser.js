import { useState } from "react"
const AddUser = () => {
    const [name, setName] = useState('')
    const [bday, setBday] = useState('')
    const [gender, setGender] = useState('')
    const [city, setCity] = useState('')

const onGenderChange = (event) => {
    setGender(event.target.value)
    // console.log(gender)
}

const onNameChange = (event) => {
    setName(event.target.value)
    // console.log(name)

}
const onBdayChange = (event) => {
    setBday(event.target.value)
    // console.log(bday)
}

const onCityChange = (event) => {
    setCity(event.target.value)
}

const clrData = () => {
    setBday('')
    setName('')
    setGender()
    setCity('')
}

const userSave = () => {
    console.log('User Name: ' + name)
    console.log('Date Of Birth: ' + bday)
    console.log('Gender: ' + gender)
    console.log('City: ' + city)
    clrData();
}

    return (
        <form className = 'add-form'>
            <div className='form-control'>
                <label htmlFor="">User Name</label>
                <input type="text" placeholder='Add User Name' value={name} onChange={onNameChange}/>
            </div>
            <div className='form-control'>
                <label htmlFor="">Date of Birth</label>
                <input type="text" placeholder='Add bday' value = {bday} onChange={onBdayChange} />
            </div>
            <div className='form-control form-control-check'>
                <label htmlFor="">Gender</label>
                <input type="radio" value='Male' name='gender' onChange={onGenderChange}/>Male
                <input type="radio" value='Female' name='gender' onChange={onGenderChange}/>Female
                <input type="radio" value='Other' name='gender' onChange={onGenderChange}/>Other
            </div>
            <div className='form-control'>
                <label htmlFor="">City</label>
                <input type="text" placeholder='Add City' value = {city} onChange={onCityChange} />
            </div>
            <input type="button" value='Save User' className='btn btn-block' onClick = {userSave}/>            
        </form>
    )
}

export default AddUser
