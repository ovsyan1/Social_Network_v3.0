import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setUserProfile} from '../../redux/profile_reducer';
import { withRouter } from 'react-router';
import {usersAPI} from '../../api/api';


class ProfileContainer extends React.Component {
    componentDidMount(){
        usersAPI.getProfile(this.props.match.params.userId).then(data => {
                this.props.setUserProfile(data);
            })
    }

    render(){
        return(
                <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);


export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);