function Navbar() {
    return (
        <>
            <nav style={{
            width: '100%',
            backgroundColor: 'dodgerblue'
            }}>
                <ul style={{
                    listStyleType: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    justifyContent: 'space-evenly'
                }}>
                    <li>
                        <a href="#a" style={{
                            textDecoration: 'none',
                            color: '#fff',
                            display: 'inline-block',
                            padding: '1.5rem 2.5rem',
                            fontSize: 20,
                            fontWeight: 600
                        }}>Home</a>
                    </li>

                    <li>
                        <a href="#a" style={{
                            textDecoration: 'none',
                            color: '#fff',
                            display: 'inline-block',
                            padding: '1.5rem 2.5rem',
                            fontSize: 20,
                            fontWeight: 600
                        }}>Images</a>
                    </li>

                    <li>
                        <a href="#a" style={{
                            textDecoration: 'none',
                            color: '#fff',
                            display: 'inline-block',
                            padding: '1.5rem 2.5rem',
                            fontSize: 20,
                            fontWeight: 600
                        }}>Videos</a>
                    </li>

                    <li>
                        <a href="#a" style={{
                            textDecoration: 'none',
                            color: '#fff',
                            display: 'inline-block',
                            padding: '1.5rem 2.5rem',
                            fontSize: 20,
                            fontWeight: 600
                        }}>Movies</a>
                    </li>

                    <li>
                        <a href="#a" style={{
                            textDecoration: 'none',
                            color: '#fff',
                            display: 'inline-block',
                            padding: '1.5rem 2.5rem',
                            fontSize: 20,
                            fontWeight: 600
                        }}>Contact us</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar