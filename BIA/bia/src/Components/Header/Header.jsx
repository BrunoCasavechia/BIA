// Importa o ícone de lupa
// Colocar no terminal o comando: npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Styles
import styles from '../Header/Header.module.css';

const Header = () => {
    return (
        <header>
            {/* Cria a frase ao topo do site */}
            <div className={styles.header_principal}>
                <h1>Encontre o processo que você procura!</h1>
            </div>

            {/* Cria uma div para selecionar os dois menus */}
            <div className={styles.menu_inteiro}>

                {/* Cria o menu de navegação do site */}
                <div className={styles.menu_navegacao}>
                    <nav>
                        <ul>
                            <li><Link to="/">Início</Link></li>
                            <li><Link to="/SobreNos">Sobre nós</Link></li>
                            <li><Link to="/Contato">Contato</Link></li>
                            <li><Link to="/FAQ">FAQ</Link></li>
                        </ul>
                    </nav>
                </div>

                {/* Cria o menu de pesquisa do site */}
                <div className={styles.menu_pesquisa}>
                    <img src="/Sem-Título-1.png" alt="Logo" />
                    <div className={styles.barra_pesquisa}>
                        <input 
                            type="text" 
                            placeholder="Procure por código de processo, OAB..." 
                        />
                        <button type='submit'>
                            <FontAwesomeIcon icon={faSearch}/>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
