import React, { useEffect, useState, useMemo } from 'react'
import useFullPageLoader from '../../hooks/useFullPageLoader';
import Header from '../Headers'
import PaginationComponent from '../PaginationComponent/index';
import Search from '../SearchComponent/Search';


const DataTable = (props) => {
    const [loader, showLoader, hideLoader] = useFullPageLoader();
    const [comments, setComments] = useState([]);

    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const [search, setSearch] = useState("");
    
    const ITEMS_PER_PAGE = 50;

    useEffect(() => {
        const getData = () => {
            showLoader();

            fetch("https://jsonplaceholder.typicode.com/comments")
                .then(response => response.json())
                .then(json => {
                    hideLoader();
                    setComments(json);
                    console.log(json);
                });
        };

        getData();
    }, []);
    
  return(
    <>
        <Header title="Building a data table in react" />

        <div className="row w-100">
            <div className="col mb-3 col-12 text-center">
                <div className="row">
                    <div className="col-md-6">
                        <PaginationComponent
                            total={500}
                            itemsPerPage={ITEMS_PER_PAGE}
                            currentPage={currentPage}
                            onPageChange={page => setCurrentPage(page)}
                        />
                    </div>
                    <div className="col-md-6 d-flex flex-row-reverse">
                        <Search
                            onSearch={value => {
                                setSearch(value);
                                setCurrentPage(1);
                            }}
                        />
                    </div>
                </div>

                {/* <table className="table table-striped">
                    <TableHeader
                        headers={headers}
                        onSorting={(field, order) =>
                            setSorting({ field, order })
                        }
                    />
                    <tbody>
                        {commentsData.map(comment => (
                            <tr>
                                <th scope="row" key={comment.id}>
                                    {comment.id}
                                </th>
                                <td>{comment.name}</td>
                                <td>{comment.email}</td>
                                <td>{comment.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table> */}
            </div>
        </div>
        {loader}
    </>
   )

 }

export default DataTable