import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';

function EditBook() {
    const { bookId } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [initialvalue, setInitialvalue] = useState({
        title: "",
        author: "",
        isbn: "",
        publication: ""
    });

    useEffect(() => {
        const fetchbookdata = async () => {
            try {
                console.log('Fetching book data for ID:', bookId);  // Debugging line
                const res = await axios.get(`https://fullstack-p1-be.onrender.com/books/${bookId}`);
                console.log('Fetched Data:', res.data);  // Debugging line
                setInitialvalue({
                    title: res.data.title || "",
                    author: res.data.author || "",
                    isbn: res.data.isbn || "",
                    publication: res.data.publication || ""
                });
                setLoading(false);
            } catch (error) {
                console.error("Error fetching book data", error);
                setLoading(false);
            }
        };
        fetchbookdata();
    }, [bookId]);

    const formik = useFormik({
        enableReinitialize: true,  // This allows the form to reinitialize when `initialValues` change
        initialValues: initialvalue,
        validate: async (values) => {
            let error = {};

            if (values.title === "") {
                error.title = "Kindly enter a valid title";
            }
            if (values.author === "") {
                error.author = "Kindly enter a valid author";
            }
            if (values.isbn === "") {
                error.isbn = "Kindly enter a valid ISBN";
            }
            if (values.publication === "") {
                error.publication = "Kindly enter a valid publication";
            }

            return error;
        },
        onSubmit: async (values, actions) => {
            try {
                await axios.put(`https://fullstack-p1-be.onrender.com/books/${bookId}`, values);
                navigate("/portal/listbook");
                actions.resetForm();
            } catch (error) {
                console.error("Error updating book", error);
            }
        }
    });

    if (loading) {
        return <div>Loading...</div>;  // Show a loading state while fetching data
    }

    console.log('Formik Values:', formik.values);  // Debug: Log formik values to verify

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={formik.handleSubmit} className='Form'>
                        <h4 className='heading text-center m-5'>Update the Book details here!!!</h4>

                        <div className='row mb-3'>
                            <label htmlFor="title" className='col-md-3 col-form-lable'>Title</label>
                            <div className='col-md-9'>
                                <input type="text"
                                    id='title'
                                    name='title'
                                    value={formik.values.title}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='Enter the Title of the book'
                                    className='form-control'
                                    style={{ borderColor: formik.touched.title && formik.errors.title ? "red" : "" }}
                                />
                                {formik.touched.title && formik.errors.title && (<span style={{ color: "orange" }}>{formik.errors.title}</span>)}
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label htmlFor="author" className='col-md-3 col-form-lable'>Author</label>
                            <div className='col-md-9'>
                                <input type="text"
                                    id='author'
                                    name='author'
                                    value={formik.values.author}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='Enter the Author of the book'
                                    className='form-control'
                                    style={{ borderColor: formik.touched.author && formik.errors.author ? "red" : "" }}
                                />
                                {formik.touched.author && formik.errors.author && (<span style={{ color: "orange" }}>{formik.errors.author}</span>)}
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label htmlFor="isbn" className='col-md-3 col-form-lable'>ISBN</label>
                            <div className='col-md-9'>
                                <input type="text"
                                    id='isbn'
                                    name='isbn'
                                    value={formik.values.isbn}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='Enter the ISBN of the book'
                                    className='form-control'
                                    style={{ borderColor: formik.touched.isbn && formik.errors.isbn ? "red" : "" }}
                                />
                                {formik.touched.isbn && formik.errors.isbn && (<span style={{ color: "orange" }}>{formik.errors.isbn}</span>)}
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label htmlFor="publication" className='col-md-3 col-form-lable'>Publication</label>
                            <div className='col-md-9'>
                                <input type="text"
                                    id='publication'
                                    name='publication'
                                    value={formik.values.publication}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='Enter the Publication of the book'
                                    className='form-control'
                                    style={{ borderColor: formik.touched.publication && formik.errors.publication ? "red" : "" }}
                                />
                                {formik.touched.publication && formik.errors.publication && (<span style={{ color: "orange" }}>{formik.errors.publication}</span>)}
                            </div>
                        </div>

                        <div className='submit'>
                            <button type="submit" className='btn btn-outline-primary'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditBook;