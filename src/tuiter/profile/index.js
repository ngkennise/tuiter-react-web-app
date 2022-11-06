import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import './index.css';

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    return(
        <>
            <div>
                <div className="row mt-2">
                    <div className="col-1">
                        <Link to="/tuiter/">
                            <i className="ms-2 text-black fw-bolder bi bi-arrow-left"></i>
                        </Link>
                    </div>

                    <div className="col-11">
                        <h5 className="ms-2">{profile.firstName} {profile.lastName}</h5>
                        {/*<br/>*/}
                        <h6 className="text-muted fw-light ms-2">6,114 Tweets</h6>
                    </div>
                </div>
            </div>
            <div className="position-relative">
                <img src={`/images/${profile.profilePicture}`} className=" position-absolute rounded-circle border border-white wd-profile-picture-area"/>
            </div>

            <div>
                <div>
                    <img height={100} src={`/images/${profile.bannerPicture}`} className="rounded img-fluid w-100"/>
                </div>

                <div className="position-relative">
                    {/*<img src={`/images/${profile.profilePicture}`} className=" position-absolute rounded-circle border border-white wd-profile-picture-area"/>*/}
                    <Link>
                        <button type ="button" className="btn btn-white border border-grey fw-bold rounded-pill float-end mt-2">Edit profile</button>
                    </Link>

                </div>
                <br></br>
                <br></br>

                <div className="mt-5">
                    <h5 className="fw-bold text-black">{profile.firstName} {profile.lastName}</h5>
                    <h6 className="text-secondary fw-light mb-4">{profile.handle}</h6>
                    <h6 className="text-dark fw-light mb-3">{profile.bio}</h6>

                    <div className="text-muted">
                        <span>
                            <i className="bi bi-geo-alt mt-3"></i>
                            {profile.location}
                        </span>
                        <span className="ms-2">
                            <i className="bi bi-balloon"></i>
                            <span className="ms-2">Born {profile.dateOfBirth}</span>
                            <span className="ms-2"></span>
                        </span>
                        <span className="ms-2">
                            <i className="bi bi-calendar3"></i>
                            <span className="ms-2">Joined {profile.dateJoined}</span>

                        </span>
                    </div>

                    <div className="mt-2">
                        <span className="text-dark fw-bolder ms-2">{profile.followingCount}</span>
                        <span className="text-muted ms-1">Following</span>
                        <span className="text-dark fw-bolder ms-3">{profile.followersCount}</span>
                        <span className="text-muted ms-1">Followers</span>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProfileComponent;