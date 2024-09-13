import * as S from "./style";


const Header = () => {
    return (
        <S.StyledHeader>
        <div>
            <i>icon</i>
            <h1>Logo</h1>
        </div>
        <nav>
            <ul>
                <li>Home</li>
                <li>Sobre</li>
                <li>Projetos</li>
                <li>Contato</li>
            </ul>

            <button>Get Starterd</button>
        </nav>
        </S.StyledHeader>
    );

};

export default Header