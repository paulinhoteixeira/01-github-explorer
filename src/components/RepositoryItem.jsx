export function RepositoryItem(props){
    return(
        <li>
        {/* caso a propriedade esteja vazia, vai assumir a palavra unform */}
        <strong>{props.repository.name ?? "unform"}</strong> 
        <p>{props.repository.description}</p>

        <a href={props.repository.link}>
            Acessar repositório
        </a>
    </li>
    )
}