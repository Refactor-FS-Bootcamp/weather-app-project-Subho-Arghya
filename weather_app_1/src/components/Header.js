import Button from "./Button.js"

const Header = () => {

    const headerMessage = () => {
        return "My Favorite cities"
    }

    const handleClickButton = () => {
        console.log("Will Launch Modal")
    }

    return (
        <div className="header-wrapper">
            <div>
                <h3>{headerMessage()}</h3>
            </div>
            <div>
                <Button title="Add New City" handleClick={handleClickButton} />
            </div>
        </div>
    )

}

export default Header