// Utilize this to import imagery from folders onto the page. 
// import _____  from _________


const Popular = () => {
    return (
        <section className="section" id="">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-centered card-body">
                        <div className="section-heading">
                            <h2>Popular Recipes</h2>
                            <p>Optional Text Here</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <ul className="features-items">
                            <li className="feature-item">
                                <div className="left-icon">
                                </div>
                                <div className="right-content">
                                    <h4>Dish Title</h4>
                                    <p>Recipe Goes Here.</p>
                                </div>
                            </li>
                            <li className="feature-item">
                                <div className="left-icon">
                                <img  alt="" />
                                </div>
                            </li>

                        </ul>
                    </div>
                
                    <a className="home-button section-btn" href="#(SECTION)">Place Additional info or references here.</a>

                </div>
            </div>
        </section>
    )

}

export default Popular;