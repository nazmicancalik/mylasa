import { connect } from 'react-redux';
import { JoinOrCreateRoomScreenComponent } from './JoinOrCreateRoomScreen';

function mapStateToProps(state) {
    return {
        username: state.app.username,
        roomname: state.app.roomname
    };
};

function mapDispatchToProps(dispatch) {
    return {};
};

export const JoinOrCreateRoomScreen = connect(mapStateToProps,mapDispatchToProps)(JoinOrCreateRoomScreenComponent);