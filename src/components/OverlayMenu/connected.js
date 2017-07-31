import { connect } from 'react-redux';
import NewComponent from './pure';

const mapStateToProps = (state, ownProps) => ({
  sections: state.overlayMenu.sections,
  isActive: state.overlayMenu.isActive
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch({type: 'CLOSE_OVERLAY_MENU'})
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewComponent);
