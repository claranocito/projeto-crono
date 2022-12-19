import './styles.css'

const Banner = () => {
    return (
        <div>
            <div className="banner-container">
                <h1 className='h1-banner'>CRONOGRAMA DE ESTUDOS PERFEITO</h1>
                <div className="text-container">
                    <p className="p-banner">
                    Montar um cronograma de estudos não é fácil né? Ele deve ser específico e adequado ao tempo que você possui para estudar. O cronograma perfeito é o seu cronograma. <strong>Pensando nisso e usando nossas dicas, desenvolvemos um gerador de cronograma de estudos perfeito para você que está estudando para o ENEM e outros vestibulares!</strong>
                    </p>
                </div>
                <button className="button-banner">
                <a className='link-button' href="#scroll">Criar meu cronograma</a>
                </button>
            </div>
        </div>
    )
}

export {Banner}