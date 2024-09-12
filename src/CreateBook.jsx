import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'

function CreateBook() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            title: "",
            author: "",
            isbn: "",
            publication: ""
        },
        validate: async (values) => {
            let error = {};

            if (values.title === "") {
                error.title = "Kindly enter the valid title"
            }
            if (values.author === "") {
                error.author = "Kindly enter the valid author"
            }
            if (values.isbn === "") {
                error.isbn = "Kindly enter the valid isbn"
            }
            if (values.publication === "") {
                error.publication = "Kindly enter the valid publication"
            }

            return error;
        },
        onSubmit: async (values, actions) => {
            await axios.post("http://localhost:3006/books", values)
            navigate("/portal/listbook")
            actions.resetForm();
        }
    });

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={formik.handleSubmit} className='Form'>
                            <h4 className='heading text-center m-5'>Add the Book details here!!!</h4>

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
                                        placeholder='Enter the Title of the author'
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
                                        placeholder='Enter the Title of the isbn'
                                        className='form-control'
                                        style={{ borderColor: formik.touched.isbn && formik.errors.isbn ? "red" : "" }}
                                    />
                                    {formik.touched.isbn && formik.errors.isbn && (<span style={{ color: "orange" }}>{formik.errors.isbn}</span>)}
                                </div>
                            </div>

                            <div className='row mb-3'>
                                <label htmlFor="title" className='col-md-3 col-form-lable'>Publication</label>
                                <div className='col-md-9'>
                                    <input type="text"
                                        id='publication'
                                        name='publication'
                                        value={formik.values.publication}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder='Enter the Title of the publication'
                                        className='form-control'
                                        style={{ borderColor: formik.touched.publication && formik.errors.publication ? "red" : "" }}
                                    />
                                    {formik.touched.publication && formik.errors.publication && (<span style={{ color: "orange" }}>{formik.errors.publication}</span>)}
                                </div>
                            </div>

                            <div className='submit'>
                                <button type="submit" className='btn btn-outline-primary'>Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateBook