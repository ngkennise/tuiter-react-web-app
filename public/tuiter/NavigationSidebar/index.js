/* eslint-env jquery */

const NavigationSidebar = () => {
    return(`
                <div class="list-group">
                    <div>
                        <a href=""
                           class="list-group-item list-group-item-action bg-dark text-white">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                    <a href="../HomeScreen/index.html"
                       class="list-group-item list-group-item-action bg-dark text-white fw-light">
                        <div>
                            <span><i class="fas fa-home"></i></span>
                            <span class="d-none d-xl-inline">Home</span>
                        </div>
                    </a>

                    <a href="../explore/index.html"
                       class="list-group-item list-group-item-action active text-white fw-bold">
                        <i class="fas fa-hashtag"></i>
                        <span class="d-none d-xl-inline">Explore</span>
                    </a>
                    <a href=""
                       class="list-group-item list-group-item-action bg-dark text-white fw-light">
                        <i class="fas fa-bell"></i>
                        <span class="d-none d-xl-inline">Notifications</span>
                    </a>
                    <a href="../messages.html"
                       class="list-group-item list-group-item-action bg-dark text-white fw-light">
                        <i class="fas fa-envelope"></i>
                        <span class="d-none d-xl-inline">Messages</span>
                    </a>
                    <a href="../bookmarks/index.html"
                       class="list-group-item list-group-item-action bg-dark text-white fw-light">
                        <i class="fas fa-bookmark"></i>
                        <span class="d-none d-xl-inline">Bookmarks</span>
                    </a>
                    <a href=""
                       class="list-group-item list-group-item-action bg-dark text-white fw-light">
                        <i class="fas fa-th-list"></i>
                        <span class="d-none d-xl-inline">Lists</span>
                    </a>
                    <a href="../profile.html"
                       class="list-group-item list-group-item-action bg-dark text-white fw-light">
                        <i class="fas fa-user"></i>
                        <span class="d-none d-xl-inline">Profile</span>
                    </a>
                    <a href=""
                       class="list-group-item list-group-item-action bg-dark text-white fw-light">
                        <i class="fas fa-stop-circle"></i>
                        <span class="d-none d-xl-inline">More</span>
                    </a>
                        <button type="button" class="btn btn-primary btn-block w-100 mt-2 rounded-pill flex-wrap col-12">Tuit</button>
                </div>    
    `)
}
export default NavigationSidebar;