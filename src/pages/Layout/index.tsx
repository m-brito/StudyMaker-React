import './styles.css';

const Layout = () => {
    return(
        <div id="menu">
            <div id="containerImgPerfil">
                <img src="/src/assets/images/semimagem.png" alt="Procurando imagem de perfil" />
            </div>
            <h2 id="nomeUsuario">Carregando...</h2>
            <div id="linkAcoes">
                <a href="/aluno/perfil"><p>Perfil</p></a>
                <a href="/aluno/feed"><p>Feed</p></a>
                <a href="/aluno/meuscursos"><p>Cursos</p></a>
                <a href="/aluno/requisicoes"><p>Requisições</p></a>
                <p id="deslogar">Sair</p>
            </div>
        </div>
    );
}

export default Layout;
