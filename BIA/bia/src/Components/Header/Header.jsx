// Importa o botão de lupa
// Colocar no terminal o comando: npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

//Styles
import styles from '../Header/Header.module.css'

const Header = () => {
    return (
        <header>
            {/* Cria a frase ao topo do site */}
            <div className={styles.header_principal}>
                <h1>encontre o processo que você procura!</h1>
            </div>

            {/* Cria o menu de navegação do site */}
            <div className={styles.menu_navegacao}>
                <nav>
                    <ul>
                        <li><a href='#'>Início</a></li>
                        <li><a href='#'>Sobre nós</a></li>
                        <li><a href='#'>Contato</a></li>
                        <li><a href='#'>Perguntas frequentes (FAQ)</a></li>
                    </ul>
                </nav>
            </div>

            {/* Cria o menu de pesquisa do site */}
            <div className={styles.menu_pesquisa}>
                <img src="/Sem-Título-1.png" alt="Logo Empresa" />
                <div className={styles.barra_pesquisa}>

                    <input 
                    type="text" 
                    placeholder ="Procure por código de processo, OAB..." 
                    />

                    <button type='submit'>
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </div>
            </div>
            
        </header>
    );
}

export default Header;