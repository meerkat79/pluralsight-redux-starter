import React from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			course: {title: ''}
		};

		this.onTitleChange = this.onTitleChange.bind(this);
		this.OnClickSave = this.OnClickSave.bind(this);

	}

	onTitleChange(event) {
		const course = this.state.course;
		course.title = event.target.value;
		this.setState({course: course});
		console.log('course now is: ', this.state.course);
	}

	OnClickSave() {
		this.props.dispatch(courseActions.createCourse(this.state.course));
	}

	render() { 
		return (
			<div>
				<h1>Courses</h1>
				<h2>Add Course</h2>
				<input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
				<input type="submit" value="Save" onClick={this.OnClickSave} />
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		courses: state.courses
	};
}

export default connect(mapStateToProps) (CoursesPage);
