import { connect } from 'react-redux';
import { AppComponent } from './App';

function mapStateToProps(state) {
    return {
        isLoggedIn: state.app.isLoggedIn
    };
};

function mapDispatchToProps(dispatch) {
    return {};
};

export const App = connect(mapStateToProps,mapDispatchToProps)(AppComponent);