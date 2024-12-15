const DATA = [
"Muddatli To'lov", 
"Elektronika", 
"Maishiy Tehnika", 
"Kiyim", 
"Poyabzallar",
"Aksessuarlar",
"Goʻzallik va parvarish",
"Salomatlik",
"Uy-roʻzgʻor buyumlari",
"Qurilish va taʼmirlash",


]

function NavbarBottom() {
  return (
    <div className='navbarbottom'>
      <div className='container'>
        <div className='navbarbottom-wrapper'>
          {DATA.map((item, index) => {
            return <p key={index}>{item}</p>
          })}
        </div>
      </div>
    </div>
  )
}

export default NavbarBottom