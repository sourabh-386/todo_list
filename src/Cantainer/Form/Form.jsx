import React, { useState } from 'react'

import { User_date, User_day, User_time } from '../data/Date'
import { Old_data } from '../data/defaultData'
import './Form.css'



const Form = () => {


    // this will store all data 
    const [list, setlist] = useState(Old_data)


    // created state fore user input 
    let [userData, newuserData] = useState({
        user_name: '',
        user_age: "",
        user_number: '',
        user_day: ``,
        user_time: ``,
        user_date: ``
    })






    // for deletion in list 

    const deletion = (element) => {
        console.log(element.user_id)
        setlist(list.filter((list_ele) => { return (element.user_id !== list_ele.user_id) }))
    }

    // for edition of data 
    let [ind, newind] = useState(null)
    const edition = (element) => {
        console.log(element)
        newuserData(element)
        let a = list.findIndex((list_ele) => { return (list_ele.user_id === element.user_id) })
        newind(a)
        console.log(ind);

    }









    // form cleaning 
    const defaultData = {
        user_name: '',
        user_age: '',
        user_number: ''

    }



    // taking data from form 
    let input = (e) => {

        newuserData({
            ...userData,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value




        })

    }

    // sending data to list by submition 
    const user_input = (e) => {
        e.preventDefault()

        if (userData.user_name === '' || userData.user_age <= 6 || userData.user_number.length !== 10) {

            alert('fill data correctly.')


        }

        else {

            if (ind === null) {
                userData.user_name = userData.user_name[0].toUpperCase() + userData.user_name.slice(1, userData.user_name.length)
                newuserData(defaultData)
                let user = false
                for (let i = 0; i < list.length; i++) {

                    if (list[i].user_name === userData.user_name) {
                        user = true
                        console.log('true')
                        break


                    }
                    else {
                        user = false
                        console.log('false')

                    }

                }
                if (user === true) {
                    alert('Already registred')
                }
                else {

                    setlist([...list, { ...userData, user_id: list.length + 1, user_day: User_day, user_time: User_time, user_date: User_date }])


                }
            }
            else {
                list.splice(ind, 1, userData)
                newind(null)
                newuserData(defaultData)

            }
        }
    }

    return (

        <div>
            <form className='form'>
                <input type="text" placeholder='Name' name='user_name' onChange={input} value={userData.user_name} />
                <input type="number" placeholder='Age' name='user_age' onChange={input} value={userData.user_age} />
                <input type="number" placeholder='10-Digit number' name='user_number' onChange={input} value={userData.user_number} />
                <button onClick={user_input}>{ind === null ? 'Submit' : 'Edit'}</button>
            </form>
            <br />
            <div className="showdata">
                {
                    list.map((element) => {
                        return (
                            <div className="showdata_element">
                                <h3 className='id'>{element.user_id}</h3>
                                <h3>{element.user_name}</h3>
                                <h3>{element.user_age}</h3>
                                <h3>{element.user_number}</h3>
                                <div className="date">
                                    <h5>{element.user_day}</h5>
                                    <h5>{element.user_time}</h5>
                                    <h5>{element.user_date}</h5>
                                </div>

                                <div className="button">
                                    <button className='button1' onClick={() => edition(element)} >Edit</button>
                                    <button className='button2' onClick={() => deletion(element)}>Delete</button>
                                </div>

                            </div>
                        )

                    })
                }
            </div>
        </div>
    )
}

export default Form