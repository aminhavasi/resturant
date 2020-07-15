import React from 'react';
import AdminNavbar from './adminNavbar';
import Sidebar from './sidebar';
import { Switch, Route } from 'react-router-dom';
const Admin = () => {
    return (
        <div className="container-fluid rtl">
            <ToastContainer />
            <Navbar />
            <div className="row">
                <Sidebar />
                <main
                    role="main"
                    className="col-md-9 ml-sm-auto col-lg-10 px-4"
                >
                    <Switch>
                        <Route
                            path="/admin/create-post"
                            component={CreatePost}
                        />
                        <Route path="/admin/allposts" component={AllPosts} />
                        <Route
                            path="/admin/create-course"
                            component={CreateCourse}
                        />
                        <Route
                            path="/admin/allcourses"
                            component={AllCourses}
                        />
                        <Route path="/admin/editpost" component={EditPost} />
                        <Route
                            path="/admin/editcourse"
                            component={EditCourse}
                        />
                        <Route path="/admin/logout" component={Logout} />
                    </Switch>
                </main>
            </div>
        </div>
    );
};

export default Admin;
