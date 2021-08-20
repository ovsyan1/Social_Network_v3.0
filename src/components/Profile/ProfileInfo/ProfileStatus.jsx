import React from 'react';
import classes from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title: 'Yo'
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
        console.log(this.props);
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }
    render(){
        
        return (
        <div>
            {!this.state.editMode 
            ?
            <div>
                <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
            </div>
            :
            <div>
                <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
            </div>}
        </div>
    )
    }
    
}

export default ProfileStatus;