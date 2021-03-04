import { Route } from 'react-router-dom';
import UsersContainer from './../components/Users/UsersContainer';
import DialogsContainer from './../components/Dialogs/DialogsContainer';
import LoginContainer from './../components/Login/LoginContainer';
import ProfileContainer from './../components/Profile/ProfileContainer';

export const Routers = () => (
    <div className="content main">
        <Route path="/users" component={UsersContainer} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/login" render={() => <LoginContainer />} />
    </div>
)