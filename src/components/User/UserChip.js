import React, { Component } from 'react';
import Avatar from 'react-toolbox/lib/avatar/Avatar';
import Chip from 'react-toolbox/lib/chip/Chip';
import './UserChip.css';

class UserChip extends Component {
  redirectToShowPage = user => {
    window.location.replace(`/users/${user.id}`);
  };

  render() {
    return (
      <div className="user-chip-container">
        <Chip
          onClick={() => this.redirectToShowPage(this.props.user)}
          className="user-chip"
        >
          <Avatar>
            <img src={this.props.user.avatar_url} />
          </Avatar>
          <span>{this.props.user.login}</span>
        </Chip>
      </div>
    );
  }
}

export default UserChip;
