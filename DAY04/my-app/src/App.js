function App() {
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

        <section style={{
          width: '75%',
          backgroundColor: '#ccc',
          color: '#000',
          margin: '0 auto',
          height: '85vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h2 style={{
            padding: 0,
            margin: 0
          }}>This is a section.</h2>
        </section>

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

export default App 
