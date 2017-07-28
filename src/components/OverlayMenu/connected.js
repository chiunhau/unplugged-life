import { connect } from 'react-redux';
import NewComponent from './pure';

const mapStateToProps = (state, ownProps) => ({
  sections: state.overlayMenu.sections,
  isActive: state.overlayMenu.isActive
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewComponent);
