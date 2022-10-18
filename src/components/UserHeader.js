import React from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProp = (state, ownProp) => {
  return { user: state.users.find((user) => user.id === ownProp.userId) };
};

export default connect(mapStateToProp)(UserHeader);
