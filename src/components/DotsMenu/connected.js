import { connect } from 'react-redux';
import NewComponent from './pure';

const mapStateToProps = (state, ownProps) => ({
  sections: state.overlayMenu.sections
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewComponent);
