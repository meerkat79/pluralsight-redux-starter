import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.courseRow = this.courseRow.bind(this);

	}

	courseRow(course, index) {
		return <div key={index}>{course.title}</div>;
	}

	errorRow(error, index) {
		return <div key={index}>{error.msg}</div>;
	}	

	render() {
		return (
			<div>
				<h1>Courses</h1>
					{this.props.courses.map(this.courseRow)}
					{this.props.errors ? this.props.errors.map(this.errorRow): ''}
			</div>
		);
	}
}

CoursesPage.propTypes = {
	dispatch: PropTypes.func.isRequired,
	courses: PropTypes.array.isRequired,
	errors: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		courses: state.courses,
		errors: state.errors
	};
}

export default connect(mapStateToProps) (CoursesPage);
