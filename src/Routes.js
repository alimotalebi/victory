import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import IntroductionComponent from './components/Introduction'
import StoriesUserComponent from './components/User/StoriesUser'
import ProfileUserComponent from './components/User/ProfileUser'
import LogOutUserComponent from './components/User/LogOutUser'
import ForgotPasswordUserComponent from './components/User/ForgotPasswordUser'
import ResetPasswordUserComponent from './components/User/ResetPasswordUser'
import ChangePasswordUserComponent from './components/User/ChangePasswordUser'
import CreateStoryComponent from './components/Story/CreateStory'
import ListShortStoryComponent from "./components/Story/ListShortStory";
import ShortStoryComponent from "./components/Story/ShortStory"
import VerifyEmailTokenComponent from './components/Token/VerifyEmailToken'
import NotFoundErrorComponent from './components/Error/NotFoundError'
import UserContainer from "./containers/UserContainer";
import TokenContainer from "./containers/TokenContainer";
import StoryContainer from "./containers/StoryContainer";
import DraftContainer from "./containers/DraftContainer";
export default () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<UserContainer>
						<IntroductionComponent/>
					</UserContainer>
				</Route>
				<Route exact path="/user/profile">
					<UserContainer>
						<ProfileUserComponent/>
					</UserContainer>
				</Route>
				<Route exact path="/user/stories">
					<UserContainer>
						<StoryContainer>
							<StoriesUserComponent/>
						</StoryContainer>
					</UserContainer>
				</Route>
				<Route exact path="/user/password/forgot">
					<TokenContainer>
						<UserContainer>
							<ForgotPasswordUserComponent/>
						</UserContainer>
					</TokenContainer>
				</Route>
				<Route exact path="/user/password/reset">
					<UserContainer>
						<ResetPasswordUserComponent/>
					</UserContainer>
				</Route>
				<Route exact path="/user/password/change">
					<UserContainer>
						<ChangePasswordUserComponent/>
					</UserContainer>
				</Route>
				<Route exact path="/story/create">
					<UserContainer>
						<DraftContainer>
							<StoryContainer>
								<CreateStoryComponent/>
							</StoryContainer>
						</DraftContainer>
					</UserContainer>
				</Route>
				<Route exact path="/story/short/list">
					<ListShortStoryComponent/>
				</Route>
				<Route exact path="/story/short/:id">
					<ShortStoryComponent/>
				</Route>
				<Route exact path="/token/email/verify">
					<UserContainer>
						<TokenContainer>
							<VerifyEmailTokenComponent/>
						</TokenContainer>
					</UserContainer>
				</Route>
				<Route exact path="/user/logout">
					<UserContainer>
						<LogOutUserComponent/>
					</UserContainer>
				</Route>
				<Route component={NotFoundErrorComponent}/>
			</Switch>
		</Router>
	);
}
