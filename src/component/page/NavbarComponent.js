export default function NavbarComponent(){
    return(
        <div>
        <nav className="site-nav">
            <div className="container">
                <div className="menu-bg-wrap">
                    <div className="site-navigation">
                        <div className="row g-0 align-items-center">
                            <div className="col-2">
                                <a href="index.html" className="logo m-0 float-start">Blogy<span
                                    className="text-primary">.</span></a>
                            </div>
                            <div className="col-8 text-center">
                                <form action="src/component#" className="search-form d-inline-block d-lg-none">
                                    <input type="text" className="form-control" placeholder="Search..."/>
                                    <span className="bi-search"></span>
                                </form>

                                <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
                                    <li className="active"><a href="index.html">Home</a></li>
                                    <li className="has-children">
                                        <a href="category.html">Pages</a>
                                        <ul className="dropdown">
                                            <li><a href="search-result.html">Search Result</a></li>
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="single.html">Blog Single</a></li>
                                            <li><a href="category.html">Category</a></li>
                                            <li><a href="about.html">About</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                            <li><a href="src/component#">Menu One</a></li>
                                            <li><a href="src/component#">Menu Two</a></li>
                                            <li className="has-children">
                                                <a href="src/component#">Dropdown</a>
                                                <ul className="dropdown">
                                                    <li><a href="src/component#">Sub Menu One</a></li>
                                                    <li><a href="src/component#">Sub Menu Two</a></li>
                                                    <li><a href="src/component#">Sub Menu Three</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="category.html">Culture</a></li>
                                    <li><a href="category.html">Business</a></li>
                                    <li><a href="category.html">Politics</a></li>
                                </ul>
                            </div>
                            <div className="col-2 text-end">
                                <a href="src/component#"
                                   className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light">
                                    <span></span>
                                </a>
                                <form action="src/component#" className="search-form d-none d-lg-inline-block">
                                    <input type="text" className="form-control" placeholder="Search..."/>
                                    <span className="bi-search"></span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    )
}