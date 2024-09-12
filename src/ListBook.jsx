import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ListBook() {
    const [apidata, setApidata] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getApidata();
    }, [])

    const getApidata = async () => {
        try {
            const res = await axios.get("https://fullstack-p1-be.onrender.com/books")
            setApidata(res.data)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const deletedata = async (bookId) => {
        try {
            await axios.delete(`https://fullstack-p1-be.onrender.com/books/${bookId}`)
            getApidata();
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const editdata = async (bookId) => {
        navigate(`/portal/editbook/${bookId}`)
    }

    return (
        <>
            <div className="container m-2">
                <div className="row">
                    {apidata.length === 0 ? (
                        <div className="col-12 text-center mt-5">
                            <h3>No books added yet!</h3>
                        </div>
                    ) : (apidata.map(data => (
                        <div className="col-md-4 p-1" key={data._id}>
                            <div className='card' style={{ width: "15 rem", height: "15 rem" }}>
                                <h5 className='card-header'><b>Title:</b> {data.title}</h5>
                                <div className="card-body">
                                    <p className="card-text"><b>Author:</b> {data.author}</p>
                                    <p className="card-text"><b>ISBN:</b> {data.isbn}</p>
                                    <p className="card-text"><b>Publication:</b> {data.publication}</p>
                                </div>

                                <div className="card-footer d-flex justify-content-between">
                                    <button className='btn btn-outline-warning' onClick={() => { editdata(data._id) }}>Edit Book</button>
                                    <button className='btn btn-outline-danger' onClick={() => { deletedata(data._id) }}>Delete Book</button>
                                </div>

                            </div>
                        </div>
                    )))}

                </div>
            </div>
        </>
    )
}

export default ListBook