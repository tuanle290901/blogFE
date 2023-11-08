import React, {useState, useEffect} from 'react';
import axiosInstance from '../api/service/AxiosInstance';
import {useParams} from 'react-router-dom';

const BlogDetail = () => {
    const [blogs, setBlogs] = useState([]);
    const {blog} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const blogsResponse = await axiosInstance.get(`/blog/getall`); // Assuming you want to fetch a specific blog
                const fetchedBlogs = blogsResponse.data;
                console.log('blog', fetchedBlogs);
                setBlogs(fetchedBlogs);
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
            }
        };

        fetchData();
    }, [blog]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">Navbar</a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <h3>Bài viết</h3>
                        {blogs.map((blog) => (

                            <div className="media" key={blog.id}>

                                <img src={blog.avatar} className="mr-3" alt="..."/>

                                <div className="media-body">
                                    <div className="post-meta">
                                        <span className="date"> Tag: <a href="">{blog.tag.name};</a> </span>
                                        <span>Ngày đăng: {blog.timeComment}</span>
                                    </div>
                                    <h5 className="mt-0">{blog.title}</h5>
                                    <p>{blog.content}</p>
                                </div>

                                <div>

                                </div>


                            </div>
                        ))}


                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
