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
                                    <h3 className="mt-0">{blog.title}</h3>
                                    <p>{blog.description}</p>
                                    <div className="d-flex flex-column">
                                        <div className="author-info">
                                            <img src={blog.account.img} alt="Tác giả" className="rounded-circle img-thumbnail custom-avatar" />
                                            <span className="author-name" style={{color:"ActiveBorder"}}> <strong>{blog.account.fullName}</strong>  </span>
                                        </div>
                                    </div>
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
