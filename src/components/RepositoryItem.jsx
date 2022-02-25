export function RepositoryItem(props){
    return(
        <li>
        {/* caso a propriedade esteja vazia, vai assumir a palavra unform */}
        <strong>{props.repository.name}</strong> 
        <p>{props.repository.description}</p>

        <a href={props.repository.html_url}>
            Acessar repositório
        </a>
    </li>
    )
}