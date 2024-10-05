// Importa o botão de lupa
// Colocar no temrinal o comando: npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from '../Header/Header.module.css'

const Header = () => {
    return (
        <header>
            <div className={styles.header_principal}>
                <h1>encontre o processo que você procura!</h1>
            </div>

            <div className={styles.menu_pesquisa}>
                <div><img src="/Logo_Bia.png" alt="" /></div>
                <div className={styles.barra_pesquisa}>
                    <input type="text" placeholder ="Procure por código de processo, OAB..." />
                    <button type='submit'>
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </div>
            </div>
            
        </header>
    );
}

export default Header;