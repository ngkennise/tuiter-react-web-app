import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row bg-black">
                        <div class="col-11">
                            <div class="position-relative">
                                <input class="ps-5 form-control rounded-pill mt-2" placeholder="Search Tuiter"/>
                                    <span class="position-absolute wd-search-icon-tuiter">
                                        <i class="fas fa-search"></i>
                                    </span>
                            </div>
                        </div>
                        <div class="col-1 mt-3 float-start">
                            <i class="fas fa-cog text-primary"></i>
                        </div>
           </div>
           <div>
                    <ul class="nav nav-tabs mt-2 mb-2 border-bottom-0 text-white ">
                        <li class="nav-item">
                            <a class="nav-link bg-primary" href="#">For you</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Trending</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sports</a>
                        </li>
                        <li class="nav-item">
                            <div class ="d-none d-md-inline">
                            <a class="nav-link" href="#">Entertainment</a>
                            </div>
                        </li>
                    </ul>
                        <div class="position-relative mb-2">
                            <img src="../../images/starship.jpg" width="100%">
                            <h3 class="position-absolute bottom-0 left-0 text-dark p-lg-1">
                            SpaceX's Starship
                            </h3>
                        </div>
           </div> 
           ${PostSummaryList()}
           
    `);
}
export default ExploreComponent;

