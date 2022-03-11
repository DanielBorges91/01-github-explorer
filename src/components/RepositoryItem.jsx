export function RepositoryItem(props) {
    return(
      <li>
        <strong>{props.repository?.name ?? 'Name repository Default'}</strong>
        <p>{props.repository?.description ?? 'Description Default'}</p>

        <a href={props.repository?.link ?? 'https://google.com'}>
          Acessar repositório
        </a>
      </li>
    );
}