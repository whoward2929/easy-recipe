// Main index - initial "page"


const Main = ()=>{
    
    return(
        <div class="main-banner" id="Main">
        

            <div class="video-overlay header-text">
                <div class="caption">

                    <h2>Main Page - Welcome to EZ Recipes</h2>
                    
                    <h6>Click Below to see different sections</h6>

                    <a className="home-button" href="#Popular">Popular Recipes</a>

                    <a className="home-button holiday" href="#Holiday">Holiday Recipes</a>

                    <a className="home-button newest" href="#Newest">Newest Recipes</a>


                </div>
            </div>

        </div>
    )
}

export default Main;