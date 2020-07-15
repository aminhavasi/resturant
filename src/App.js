import React from 'react';
import HomePage from './components/HomePage';
import { Switch, Redirect, Route } from 'react-router-dom';
import FoodMenu from './components/menuPage/foodMenu';
import NotFound from './components/common/notFound';
import DeserMenu from './components/menuPage/deserMenu';
import DrinkMenu from './components/menuPage/drinkMenu';
import Login from './components/auth/login';
import SignUp from './components/auth/signup';
import Dashboard from './components/admin/dashboard';
// import Admin from './components/admin/admin';

const App = () => {
    return (
        <div>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/admin" component={Dashboard} />

                <Route path="/food-menu" component={FoodMenu} />
                <Route path="/deser-menu" component={DeserMenu} />
                <Route path="/drink-menu" component={DrinkMenu} />

                <Route path="/not-found" component={NotFound} />
                <Route exact path="/" component={HomePage} />
                <Redirect to="/not-found" />
            </Switch>
        </div>
    );
};
export default App;
