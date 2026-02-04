
const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--bg-dark)',
            color: 'var(--text-white)',
            position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100%',
            padding: '2rem 8rem',
        }}>
            <div className="row" style={{
                display: 'grid',
                gridTemplateColumns: 'auto auto auto auto',
                columnGap: '1rem'
                
            }}>
                <div className="col" style={{
                    backgroundColor: 'yellow',
                }}>1</div>

                <div className="col" style={{
                    backgroundColor: 'yellow',
                }}>2</div>

                <div className="col" style={{
                    backgroundColor: 'yellow',
                }}>3</div>

                <div className="col" style={{
                    backgroundColor: 'yellow',
                }}>4</div>
            </div>
        </footer>
    )
}

export default Footer