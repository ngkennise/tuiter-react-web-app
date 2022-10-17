/* eslint-env jquery */

import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";
import ExploreComponent from "./ExploreComponent.js";

function exploreComponent() {
    $('#wd-explore').append(`
<!--       <h2>Explore</h2>-->
  <div class="row mt-3">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
<!--   <h3>Navigation Sidebar</h3>-->
    ${NavigationSidebar()}
   </div>
   <div class="col-10 col-lg-7 col-xl-6 bg-black text-white">
<!--    <h3>ExploreComponent</h3>-->
    ${ExploreComponent()}
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 text-white rounded">
<!--    <h3>WhoToFollowList </h3>-->
    ${WhoToFollowList()}
   </div>
  </div>

<!--<div class="bg-black text-white wd-font">-->
<!--    <div class="container pt-3">-->
<!--        <div class="row">-->
<!--            <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">-->
<!--            </div>-->

<!--                <div class="col-10 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6">-->
<!--                    <div class="row">-->
<!--                        <div class="col-11">-->
<!--                            <div class="position-relative">-->
<!--                                <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>-->
<!--                                    <span class="position-absolute wd-search-icon-tuiter">-->
<!--                                        <i class="fas fa-search"></i>-->
<!--                                    </span>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="col-1 mt-2 float-start">-->
<!--                            <i class="fas fa-cog"></i>-->
<!--                        </div>-->

<!--                    </div>-->
<!--                    <ul class="nav nav-tabs mt-2 mb-2">-->
<!--                        <li class="nav-item">-->
<!--                            <a class="nav-link active" href="#">For you</a>-->
<!--                        </li>-->
<!--                        <li class="nav-item">-->
<!--                            <a class="nav-link" href="#">Trending</a>-->
<!--                        </li>-->
<!--                        <li class="nav-item">-->
<!--                            <a class="nav-link" href="#">News</a>-->
<!--                        </li>-->
<!--                        <li class="nav-item">-->
<!--                            <a class="nav-link" href="#">Sports</a>-->
<!--                        </li>-->
<!--                        <li class="nav-item">-->
<!--                            <div class ="d-none d-md-inline">-->
<!--                            <a class="nav-link" href="#">Entertainment</a>-->
<!--                            </div>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                        <div class="position-relative">-->
<!--                            <img src="../../images/starship.jpg" width="100%">-->
<!--                            <h3 class="position-absolute bottom-0 left-0 text-white p-lg-1">-->
<!--                            SpaceX's Starship-->
<!--                            </h3>-->
<!--                        </div>-->

<!--                    <div>-->
<!--                        <ul class="list-group">-->
<!--                            <li class="list-group-item bg-dark text-white mt-2">-->
<!--                                <div class="row">-->
<!--                                    <div class="col-9">-->
<!--                                        <div class="text-secondary">-->
<!--                                            Web Development-->
<!--                                        </div>-->
<!--                                        <div class="fw-bolder">-->
<!--                                            React.JS-->
<!--                                            <i class="fas fa-check-circle"></i>-->
<!--                                            <span class="text-secondary fw-lighter"> - 2h-->
<!--                                            </span>-->
<!--                                        </div>-->
<!--                                        <div class="fw-bolder">-->
<!--                                            React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs-->
<!--                                        </div>-->

<!--                                    </div>-->

<!--                                    <div class="col-3">-->
<!--                                        <img class="float-end rounded"-->
<!--                                        src="../../images/react.png" height="100px">-->
<!--                                    </div>-->
<!--                                </div>-->

<!--                            </li>-->
<!--                            <li class="list-group-item bg-dark text-white">-->
<!--                                <div class="row">-->
<!--                                    <div class="col-9">-->
<!--                                        <div class="fw-bolder">-->
<!--                                            JavaScript-->
<!--                                            <i class="fas fa-check-circle"></i>-->
<!--                                            <span class="text-secondary fw-lighter"> - 2h-->
<!--                                            </span>-->
<!--                                        </div>-->
<!--                                        <div class="fw-bolder">-->
<!--                                            JavaScript is programming language that can run on browsers as well as desktops-->
<!--                                        </div>-->
<!--                                        <div class="text-secondary">-->
<!--                                            123K Tweets-->
<!--                                        </div>-->
<!--                                    </div>-->

<!--                                    <div class="col-3">-->
<!--                                        <img class="float-end rounded"-->
<!--                                             src="../../images/javascript.png" height="100px">-->
<!--                                    </div>-->
<!--                                </div>-->

<!--                            </li>-->
<!--                            <li class="list-group-item bg-dark text-white">-->
<!--                                <div class="row">-->
<!--                                    <div class="col-9">-->
<!--                                        <div class="text-secondary">-->
<!--                                            Web Development-->
<!--                                        </div>-->
<!--                                        <div class="fw-bolder">-->
<!--                                            jQuery-->
<!--                                        </div>-->
<!--                                        <div class="text-secondary">-->
<!--                                            312K Tweets-->
<!--                                        </div>-->
<!--                                    </div>-->

<!--                                    <div class="col-3">-->
<!--                                        <img class="float-end rounded"-->
<!--                                             src="../../images/jquery.png" height="100px">-->
<!--                                    </div>-->
<!--                                </div>-->

<!--                            </li>-->

<!--                            <li class="list-group-item bg-dark text-white">-->
<!--                                <div class="row">-->
<!--                                    <div class="col-9">-->
<!--                                        <div class="text-secondary">-->
<!--                                            Web Development-->
<!--                                        </div>-->
<!--                                        <div class="fw-bolder">-->
<!--                                            Node.JS-->
<!--                                            <i class="fas fa-check-circle"></i>-->
<!--                                            <span class="text-secondary fw-lighter"> - 2h-->
<!--                                            </span>-->
<!--                                        </div>-->
<!--                                        <div class="text-secondary">-->
<!--                                            222K Tweets-->
<!--                                        </div>-->
<!--                                    </div>-->

<!--                                    <div class="col-3">-->
<!--                                        <img class="float-end rounded"-->
<!--                                             src="../../images/nodejs.png" height="100px">-->
<!--                                    </div>-->
<!--                                </div>-->


<!--                            </li>-->
<!--                        </ul>-->
<!--                    </div>-->
<!--                </div>-->

<!--                <div class="col-4 d-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">-->
<!--                        <ul class="list-group">-->
<!--                            <li class="list-group-item border-0 bg-dark text-white">-->
<!--                                <div class="fw-bolder">-->
<!--                                Who to follow-->
<!--                                </div>-->
<!--                            </li>-->
<!--                            <li class="list-group-item border-0 bg-dark text-white">-->
<!--                                <div class="row">-->
<!--                                    <div class="col-2">-->
<!--                                        <img class ="rounded-circle"-->
<!--                                                src="../../images/java.png" width="50px">-->
<!--                                    </div>-->

<!--                                    <div class="col-7 ps-3">-->
<!--                                        <div class="fw-bolder">-->
<!--                                            Java-->
<!--                                            <i class="fas fa-check-circle"></i>-->
<!--                                        </div>-->
<!--                                        <div class="text-secondary">-->
<!--                                                @Java-->
<!--                                        </div>-->
<!--                                    </div>-->

<!--                                    <div class="col-3">-->
<!--                                        <button type="button" class="btn btn-primary mt-2 float-end rounded-pill">Follow</button>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </li>-->

<!--                            <li class="list-group-item border-0 bg-dark text-white">-->
<!--                                <div class="row">-->
<!--                                    <div class="col-2">-->
<!--                                        <img class ="rounded-circle"-->
<!--                                                src="../../images/relativityspace.png" width="50px">-->
<!--                                    </div>-->

<!--                                    <div class="col-7 ps-3">-->
<!--                                        <div class="fw-bolder">-->
<!--                                            Relativity Space-->
<!--                                            <i class="fas fa-check-circle"></i>-->
<!--                                        </div>-->
<!--                                        <div class="text-secondary">-->
<!--                                            @relativityspace-->
<!--                                        </div>-->
<!--                                    </div>-->

<!--                                    <div class="col-3">-->
<!--                                        <button type="button" class="btn btn-primary mt-2 float-end rounded-pill">Follow</button>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </li>-->

<!--                            <li class="list-group-item border-0 bg-dark text-white">-->
<!--                                <div class="row">-->
<!--                                    <div class="col-2">-->
<!--                                        <img class ="rounded-circle"-->
<!--                                                src="../../images/virgin.png" width="50px">-->
<!--                                    </div>-->

<!--                                    <div class="col-7 ps-3">-->
<!--                                        <div class="fw-bolder">-->
<!--                                            Virgin Galactic-->
<!--                                            <i class="fas fa-check-circle"></i>-->
<!--                                        </div>-->
<!--                                        <div class="text-secondary">-->
<!--                                            @virgingalactic-->
<!--                                        </div>-->
<!--                                    </div>-->

<!--                                    <div class="col-3">-->
<!--                                        <button type="button" class="btn btn-primary mt-2 float-end rounded-pill">Follow</button>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </li>-->

<!--                            <li class="list-group-item border-0 bg-dark text-white">-->
<!--                                <div class="row">-->
<!--                                    <div class="col-2">-->
<!--                                        <img class ="rounded-circle"-->
<!--                                                src="../../images/nasa.png" width="50px">-->
<!--                                    </div>-->

<!--                                    <div class="col-7 ps-3">-->
<!--                                        <div class="fw-bolder">-->
<!--                                            NASA-->
<!--                                            <i class="fas fa-check-circle"></i>-->
<!--                                        </div>-->
<!--                                        <div class="text-secondary">-->
<!--                                            @NASA-->
<!--                                        </div>-->
<!--                                    </div>-->

<!--                                    <div class="col-3">-->
<!--                                        <button type="button" class="btn btn-primary mt-2 rounded-pill float-end">Follow</button>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </li>-->

<!--                            <li class="list-group-item border-0 bg-dark text-white">-->
<!--                                <div class="row">-->
<!--                                    <div class="col-2">-->
<!--                                        <img class ="rounded-circle"-->
<!--                                                src="../../images/tesla.png" width="50px">-->
<!--                                    </div>-->

<!--                                    <div class="col-7 ps-3">-->
<!--                                        <div class="fw-bolder">-->
<!--                                            Tesla-->
<!--                                            <i class="fas fa-check-circle"></i>-->
<!--                                        </div>-->
<!--                                        <div class="text-secondary">-->
<!--                                            @Tesla-->
<!--                                        </div>-->
<!--                                    </div>-->

<!--                                    <div class="col-3">-->
<!--                                        <button type="button" class="btn btn-primary mt-2 rounded-pill float-end">Follow</button>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </li>-->
<!--                        </ul>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
    `)
}
$(exploreComponent)