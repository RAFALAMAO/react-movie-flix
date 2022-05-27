import styles from './Search.module.css'
import { FcSearch } from 'react-icons/fc'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '../hooks/useQuery';

export function Search() {

    // Para saber si existe cambio dentro del search
    const query =  useQuery();
    const search =  query.get("search");

    // Resetear el buscador
    useEffect(() => {
      setSearchText(search || "");
    }, [search])


    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();     // Cancelar el evento por defaul del formulario
        navigate("/?search=" + searchText);
    }
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input className={styles.searchInput}
                    type="text"
                    value={searchText}
                    onChange={
                        (e) => setSearchText(e.target.value)
                    }
                />
                <button
                    className={styles.searchButton}
                    type="submit">
                    <FcSearch size={20}/>
                </button>
            </div>
        </form>
    );
}