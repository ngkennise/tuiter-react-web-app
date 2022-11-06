import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    return(
        <>
            <div>
                <div className="row mt-2">
                    <div className="col-1">
                        <Link to="/tuiter/">
                            <i className="bi bi-arrow-left"></i>
                        </Link>
                    </div>

                    <div className="col-11">
                        <h5>{profile.firstName}</h5>
                        {/*<br/>*/}
                        <h6 className="text-dark">6,114 Tweets</h6>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <img height={250} src={profile.bannerPicture} className="img-fluid w-100"/>
                </div>

                <div>
                    <img src={profile.profilePicture} className="rounded-circle border border-white" height="160px"/>
                    <Link>
                        <button type ="button" className="btn btn-primary rounded-pill float-end">Edit Button</button>
                    </Link>

                </div>

                <div className="mt-4">
                    <h5 className="fw-bold text-black">{profile.firstName} {profile.lastName}</h5>
                    <h6 className="text-secondary fw-light mb-2">{profile.userName}</h6>
                    <h5 className="text-dark fw-light mb-2">{profile.bio}</h5>

                    <div>
                        <span>
                            <i className="bi bi-geo-alt"></i>
                            {profile.location}
                        </span>
                        <span>
                            <i className="bi bi-balloon"></i>
                            {profile.dateOfBirth}
                        </span>
                        <span>
                            <i className="bi bi-calendar3"></i>
                            {profile.dateJoined}
                        </span>
                    </div>

                    <div>


                    </div>

                </div>
            </div>
        </>
    );
}
export default ProfileComponent;