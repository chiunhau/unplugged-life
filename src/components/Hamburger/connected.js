import { connect } from 'react-redux';
import NewComponent from './pure';

const mapStateToProps = (state, ownProps) => ({
  isActive: state.overlayMenu.isActive
});

const mapDispatchToProps = (dispatch) => ({
  onToggle: () => dispatch({type: 'TOGGLE_OVERLAY_MENU'})
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewComponent);
