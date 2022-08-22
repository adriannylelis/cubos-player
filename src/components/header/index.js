import './style.css'
import logo from '../../assets/logo.svg'
import ProfileImg from '../../assets/img1.jpeg'

export default function Header() {
    return (
        <header>
            <img className='logo-img' alt='logo' src={logo} />
            <div className='container-user'>
                <img className='profile-img' src={ProfileImg} alt='Imagem de Perfil' />
                <strong>Bem vindo, Usuário.</strong>
            </div>
        </header>
    )
}