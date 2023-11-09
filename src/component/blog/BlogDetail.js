import React, {useState, useEffect} from 'react';
import axiosInstance from '../api/service/AxiosInstance';
import {useParams} from 'react-router-dom';

const BlogDetail = () => {
    const [blogs, setBlogs] = useState([]);
    const {blog} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const blogsResponse = await axiosInstance.get(`/api/blog/getall`);
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

            <div className="site-cover site-cover-sm same-height overlay single-page"
                 style={{backgroundImage: "url(../../images/hero_5.jpg)"}}>
                <div className="container">
                    {blogs.map((blog) => (


                        <div className="row same-height justify-content-center">
                        <div className="col-md-6">
                            <div className="post-entry text-center">
                                <h1 className="mb-4">{blog.title}</h1>
                                <div className="post-meta align-items-center text-center">
                                    <figure className="author-figure mb-0 me-3 d-inline-block"><img
                                        src={blog.account.img} alt="Image" className="img-fluid"/></figure>
                                    <span className="d-inline-block mt-1">By {blog.account.name}</span>
                                    <span>&nbsp;-&nbsp; {blog.timeCreate}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                        ))}
                </div>
            </div>

            <section className="section">
                <div className="container">

                    <div className="row blog-entries element-animate">

                        <div className="col-md-12 col-lg-8 main-content">
                            {blogs.map((blog) => (
                                <div className="post-content-body" key={blog.id}>
                                <p>{blog.contentTop}</p>
                                <div className="row my-4">
                                    <div className="col-md-12 mb-4">
                                        <img src={blog.imageBig} alt="Image placeholder"
                                             className="img-fluid rounded" style={{width:"45%",height:"100%"}}/>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <img src={blog.imageLeft} alt="Image placeholder"
                                             className="img-fluid rounded" style={{width:"45%",height:"100%"}}/>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <img src={blog.imageRight} alt="Image placeholder"
                                             className="img-fluid rounded" style={{width:"45%",height:"100%"}}/>
                                    </div>
                                </div>
                                <p>{blog.contentBelow}</p>
                            </div>))}


                            <div className="pt-5">
                                <p>Categories: <a href="#">Food</a>, <a href="#">Travel</a> Tags: <a
                                    href="#">#manila</a>, <a href="#">#asia</a></p>
                            </div>



                            <div className="pt-5 comment-wrap">
                                <h3 className="mb-5 heading">6 Comments</h3>
                                <ul className="comment-list">
                                    <li className="comment">
                                        <div className="vcard">
                                            <img src="images/person_1.jpg" alt="Image placeholder"/>
                                        </div>
                                        <div className="comment-body">
                                            <h3>Jean Doe</h3>
                                            <div className="meta">January 9, 2018 at 2:21pm</div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem
                                                laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat
                                                saepe enim sapiente iste iure! Quam voluptas earum impedit
                                                necessitatibus, nihil?</p>
                                            <p><a href="#" className="reply rounded">Reply</a></p>
                                        </div>
                                    </li>

                                    <li className="comment">
                                        <div className="vcard">
                                            <img src="images/person_2.jpg" alt="Image placeholder"/>
                                        </div>
                                        <div className="comment-body">
                                            <h3>Jean Doe</h3>
                                            <div className="meta">January 9, 2018 at 2:21pm</div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem
                                                laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat
                                                saepe enim sapiente iste iure! Quam voluptas earum impedit
                                                necessitatibus, nihil?</p>
                                            <p><a href="#" className="reply rounded">Reply</a></p>
                                        </div>

                                        <ul className="children">
                                            <li className="comment">
                                                <div className="vcard">
                                                    <img src="images/person_3.jpg" alt="Image placeholder"/>
                                                </div>
                                                <div className="comment-body">
                                                    <h3>Jean Doe</h3>
                                                    <div className="meta">January 9, 2018 at 2:21pm</div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
                                                        quidem laborum necessitatibus, ipsam impedit vitae autem, eum
                                                        officia, fugiat saepe enim sapiente iste iure! Quam voluptas
                                                        earum impedit necessitatibus, nihil?</p>
                                                    <p><a href="#" className="reply rounded">Reply</a></p>
                                                </div>


                                                <ul className="children">
                                                    <li className="comment">
                                                        <div className="vcard">
                                                            <img src="images/person_4.jpg" alt="Image placeholder"/>
                                                        </div>
                                                        <div className="comment-body">
                                                            <h3>Jean Doe</h3>
                                                            <div className="meta">January 9, 2018 at 2:21pm</div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                                Pariatur quidem laborum necessitatibus, ipsam impedit
                                                                vitae autem, eum officia, fugiat saepe enim sapiente iste
                                                                iure! Quam voluptas earum impedit necessitatibus,
                                                                nihil?</p>
                                                            <p><a href="#" className="reply rounded">Reply</a></p>
                                                        </div>

                                                        <ul className="children">
                                                            <li className="comment">
                                                                <div className="vcard">
                                                                    <img src="images/person_5.jpg"
                                                                         alt="Image placeholder"/>
                                                                </div>
                                                                <div className="comment-body">
                                                                    <h3>Jean Doe</h3>
                                                                    <div className="meta">January 9, 2018 at 2:21pm</div>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur
                                                                        adipisicing elit. Pariatur quidem laborum
                                                                        necessitatibus, ipsam impedit vitae autem, eum
                                                                        officia, fugiat saepe enim sapiente iste iure!
                                                                        Quam voluptas earum impedit necessitatibus,
                                                                        nihil?</p>
                                                                    <p><a href="#" className="reply rounded">Reply</a>
                                                                    </p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="comment">
                                        <div className="vcard">
                                            <img src="images/person_1.jpg" alt="Image placeholder"/>
                                        </div>
                                        <div className="comment-body">
                                            <h3>Jean Doe</h3>
                                            <div className="meta">January 9, 2018 at 2:21pm</div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem
                                                laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat
                                                saepe enim sapiente iste iure! Quam voluptas earum impedit
                                                necessitatibus, nihil?</p>
                                            <p><a href="#" className="reply rounded">Reply</a></p>
                                        </div>
                                    </li>
                                </ul>

                                <div className="comment-form-wrap pt-5">
                                    <h3 className="mb-5">Leave a comment</h3>
                                    <form action="#" className="p-5 bg-light">
                                        <div className="form-group">
                                            <label htmlFor="name">Name *</label>
                                            <input type="text" className="form-control" id="name"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email *</label>
                                            <input type="email" className="form-control" id="email"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="website">Website</label>
                                            <input type="url" className="form-control" id="website"/>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="message">Message</label>
                                            <textarea name="" id="message" cols="30" rows="10"
                                                      className="form-control"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="Post Comment" className="btn btn-primary"/>
                                        </div>

                                    </form>
                                </div>
                            </div>

                        </div>


                        <div className="col-md-12 col-lg-4 sidebar">
                            <div className="sidebar-box search-form-wrap">
                                <form action="#" className="sidebar-search-form">
                                    <span className="bi-search"></span>
                                    <input type="text" className="form-control" id="s"
                                           placeholder="Type a keyword and hit enter"/>
                                </form>
                            </div>
                            <div className="sidebar-box">
                                <div className="bio text-center">
                                    <img src="images/person_2.jpg" alt="Image Placeholder" className="img-fluid mb-3"/>
                                    <div className="bio-body">
                                        <h2>Hannah Anderson</h2>
                                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Exercitationem facilis sunt repellendus excepturi beatae porro debitis
                                            voluptate nulla quo veniam fuga sit molestias minus.</p>
                                        <p><a href="#" className="btn btn-primary btn-sm rounded px-2 py-2">Read my
                                            bio</a></p>
                                        <p className="social">
                                            <a href="#" className="p-2"><span className="fa fa-facebook"></span></a>
                                            <a href="#" className="p-2"><span className="fa fa-twitter"></span></a>
                                            <a href="#" className="p-2"><span className="fa fa-instagram"></span></a>
                                            <a href="#" className="p-2"><span className="fa fa-youtube-play"></span></a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-box">
                                <h3 className="heading">Popular Posts</h3>
                                <div className="post-entry-sidebar">
                                    <ul>
                                        <li>
                                            <a href="">
                                                <img src="images/img_1_sq.jpg" alt="Image placeholder"
                                                     className="me-4 rounded"/>
                                                <div className="text">
                                                    <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                                                    <div className="post-meta">
                                                        <span className="mr-2">March 15, 2018 </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src="images/img_2_sq.jpg" alt="Image placeholder"
                                                     className="me-4 rounded"/>
                                                <div className="text">
                                                    <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                                                    <div className="post-meta">
                                                        <span className="mr-2">March 15, 2018 </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src="images/img_3_sq.jpg" alt="Image placeholder"
                                                     className="me-4 rounded"/>
                                                <div className="text">
                                                    <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                                                    <div className="post-meta">
                                                        <span className="mr-2">March 15, 2018 </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>


            <section className="section posts-entry posts-entry-sm bg-light">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-12 text-uppercase text-black">More Blog Posts</div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="blog-entry">
                                <a href="single.html" className="img-link">
                                    <img src="images/img_1_horizontal.jpg" alt="Image" className="img-fluid"/>
                                </a>
                                <span className="date">Apr. 14th, 2022</span>
                                <h2><a href="single.html">Thought you loved Python? Wait until you meet Rust</a></h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p><a href="#" className="read-more">Continue Reading</a></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="blog-entry">
                                <a href="single.html" className="img-link">
                                    <img src="images/img_2_horizontal.jpg" alt="Image" className="img-fluid"/>
                                </a>
                                <span className="date">Apr. 14th, 2022</span>
                                <h2><a href="single.html">Startup vs corporate: What job suits you best?</a></h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p><a href="#" className="read-more">Continue Reading</a></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="blog-entry">
                                <a href="single.html" className="img-link">
                                    <img src="images/img_3_horizontal.jpg" alt="Image" className="img-fluid"/>
                                </a>
                                <span className="date">Apr. 14th, 2022</span>
                                <h2><a href="single.html">UK sees highest inflation in 30 years</a></h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p><a href="#" className="read-more">Continue Reading</a></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="blog-entry">
                                <a href="single.html" className="img-link">
                                    <img src="images/img_4_horizontal.jpg" alt="Image" className="img-fluid"/>
                                </a>
                                <span className="date">Apr. 14th, 2022</span>
                                <h2><a href="single.html">Don’t assume your user data in the cloud is safe</a></h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p><a href="#" className="read-more">Continue Reading</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default BlogDetail;