import './CarrosselItem.css'

const CarrosselItem = ({children, ativo}:any) => {
  const a = `carousel-item ${ativo ? 'active' : ''}`;
  return (
    <>
        <div className={a}>
            <div className="cards-wrapper">
                {children}
            </div>
        </div>
    </>
  )
}

export default CarrosselItem