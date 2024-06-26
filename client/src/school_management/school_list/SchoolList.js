// This code displays schools in a list form

import { useContext } from 'react'
import School from './school/School'
import './school_list.css'
import AppContext from '../../context/AppContext'

const SchoolList = () => {
    const {schools} = useContext(AppContext) 
  return (
    <div className='school-list'>
        <h2 className='heading-title'>SCHOOL LIST</h2>
        <div className='school-list-container'>
            <div className='headers'>
                <div><h4>ID</h4></div>
                <div><h4>Name</h4></div>
                <div><h4>Type</h4></div>
                <div><h4>County</h4></div>
                <div><h4>Action</h4></div>
            </div>
            {
                schools.map(school => <School school={school} />)
            }
        </div>
    </div>
  )
}

export default SchoolList