import { useEffect, useState } from "react";
import { tvShowApi } from "../api";



export const useActions = () => {

    const [pagination, setPagination] = useState( 1 ); // Estado de la paginación
    const [totalPages, setTotalPages] = useState( 10 ); // Para setear el total de paginass
    const [listTvShows, setListTvShows] = useState([]); // Lista de series
    const [isLoading, setLoading] = useState( true ); // Estado del loading
    const [searchQuery, setSearchQuery] = useState(''); // Este es el estado para buscar en el input search

    const fetchDataListTvShow = async () => {
        try {
            
            setLoading( true );
            const { data } = await tvShowApi.get(`/most-popular?page=${ pagination }`);
            
            setListTvShows( data.tv_shows );
            setTotalPages( 10 );

        } catch (error) {
            console.error( error );
        } finally {
            setLoading( false );
        }
    }

    const handleInputSearch = ( value ) => setSearchQuery( value )

    const onSearchFetch = async () => {
        try {
         
            setLoading( true );
            const { data } = await tvShowApi.get(`/search?q=:${ searchQuery.trim() }&page=1`);

            setListTvShows( data.tv_shows );
            setTotalPages( 1 );

        } catch (error) {
            console.log( error )
        } finally {
            setLoading( false );
        }
    }

    const handlePageChange = (event, value) => setPagination( value );

    useEffect(() => {
        if ( searchQuery.trim() !== '' ) {
            onSearchFetch()
            return;
        }
        fetchDataListTvShow();
    }, [pagination, searchQuery]);

    return [
        {
            listTvShows, 
            pagination,
            isLoading,
            searchQuery,
            totalPages,
        },
        {
            handlePageChange,
            handleInputSearch
        }
    ];
}