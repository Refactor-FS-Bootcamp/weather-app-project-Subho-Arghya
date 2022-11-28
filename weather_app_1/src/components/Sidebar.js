import { useState } from 'react'
//import SideButton from './SideButton'

const Sidebar = () => {

    const [active , setActive ] = useState('Home')

    const tabsList = [
        {
            id: 1,
            name: "Home"
        },
        {
            id: 2,
            name: "Cities"
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
                    <button key={tab.id} 
                className={active === tab.name ? 'active-button' : 'inactive-button'} 
                onClick={() => handleClick(tab.name)}>{tab.name}</button>
                )
                
            })}
        </div>
    )
}

export default Sidebar
