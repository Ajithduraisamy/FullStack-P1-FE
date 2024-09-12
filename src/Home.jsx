import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='container'>
            <header className='pb-3 mb-4 border-bottom'>
                <nav className='navbar'>
                    <div className='container-fluid'>
                        <a href="/" className='d-flex align-items-center text-body-emphasis text-decoration-none pt-3'><span className='fs-4'><h2>Books Library</h2></span></a>
                        <form className='d-flex pt-3'>
                            <Link to={"/portal/listbook"} className="btn btn-outline-success" type="submit">Dashboard</Link>
                        </form>
                    </div>
                </nav>
            </header>
            <div className='container my-5'>
                <div className='text-center bg-body-tertiary p-5 rounded-4'>
                    <h1 class="text-body-emphasis">Books</h1>
                    <p className='col-lg-8 fs-5 mx-auto text-muted'>
                        Books are sources of knowledge, inspiration, and entertainment. They span diverse genres, from fiction and non-fiction to poetry and drama, offering something for every reader. Books can transport us to imaginary worlds, teach us new skills, or provide fresh perspectives on life.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home