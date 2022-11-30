import { useState } from 'react'
//import SideButton from './SideButton'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    const [active , setActive ] = useState('Home')

    const tabsList = [
        {
            id: 1,
            name: "Home",
            uri: "/"
        },
        {
            id: 2,
            name: "Cities",
            uri: "/city"
        }
    ]

    const handleClick = (name) => {
        setActive(name)
        console.log(name + " was clicked")
    }
    
    return (
        <div className="sidebar-container">
            {tabsList.map((tab) => {
                return (
                    <Link to={tab.uri} key={tab.id}>
                    <button  
                className={active === tab.name ? 'active-button' : 'inactive-button'} 
                onClick={() => handleClick(tab.name)}>{tab.name}</button>
                </Link>
                )
                
            })}
        </div>
    )
}

export default Sidebar
