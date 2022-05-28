import { useLocation } from "react-router-dom";

// Para obtener el parametro de la url dado
export function useQuery() {
    return new URLSearchParams(useLocation().search);
}