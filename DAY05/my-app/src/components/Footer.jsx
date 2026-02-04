function Footer() {
    return (
        <>
            <footer style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                backgroundColor: '#323232',
                color: '#fff',
                position: 'fixed',
                left: 0,
                bottom: 0,
                width: '100%'
            }}>
                <h2>This is a footer.</h2>
                <h3>Date: {JSON.stringify(new Date().toLocaleDateString())}</h3>
            </footer>
        </>
    )
}

export default Footer