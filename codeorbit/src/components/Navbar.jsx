import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <nav style={{
                width: '100%',
                backgroundColor: '#020617',
                display: 'flex',
                justifyContent: "space-between",
                alignItems: 'center',
                padding: "1rem 8rem"
            }}>
                <a href="#a" style={{display: "inline-block"}}>
                    <img src="./logo.png" alt="codeorbit logo" className="logo" />
                </a>

                <ul style={{
                    listStyleType: 'none',
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: 'center',
                    gap: '1rem'
                }}>
                    <li>
                        <a href="#a" className="menu">Home</a>
                    </li>

                    <li>
                        <a href="#a" className="menu">Courses</a>
                    </li>

                    <li>
                        <a href="#a" className="menu">Teachers</a>
                    </li>

                    <li>
                        <a href="#a" className="menu">Contact us</a>
                    </li>

                    <li>
                        <a href="#a" className="talk-to-us">Talk to us</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar