import { Link } from'react-router-dom'

export default function Menu(){

    return(
        <nav className='menu'>
            <Link to='/'>Home</Link>
            <span> | </span>
            <Link to='/vistoria'>Vistoria</Link>
            <span> | </span>
            <Link to='/integrantes'>Nosso time</Link>
        </nav>
    )
}