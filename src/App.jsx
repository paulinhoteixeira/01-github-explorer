import './styles/global.scss';
import {RepositoryList} from './components/RepositoyList'
import { Counter } from './components/Counter';

export function App(){
    return (
        <>
            < RepositoryList />
            <Counter />        
        </>

    )
    
}