import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import PageNumbers from '../components/problemlist/PageNumbers';
import ProblemsTable from '../components/problemlist/ProblemsTable';
import { GET_ALL_PROBLEMS } from '../utils/common/queries';

type ProblemsListScreenProps = {}

const ProblemsListScreen: React.FC<ProblemsListScreenProps> = ({}) => {

    const [page, setPage] = useState(1)

    const { loading, error, data } = useQuery(GET_ALL_PROBLEMS, {
        variables: {
            page: page,
            limit: 3
        }
    })

    if(loading) {
        return <h1>Loading...</h1>
    }

    if(error) {
        console.log(error.message)
        return <h1>{error.message}</h1>
    }

    const problems = data.problems.problems
    const totalPages = data.problems.totalPages

    const handlePageChange = (_page: number) => {
        setPage(_page)
    }

    return (
        <div>
            Problems List Screen
            <button>Go to Problem</button>
            <p>Current Page: {page}</p>
            
            <ProblemsTable problems={problems}/>
            <PageNumbers totalPages={totalPages} currentPage={page} onChange={handlePageChange}/>
        </div>
    )
};

export default ProblemsListScreen