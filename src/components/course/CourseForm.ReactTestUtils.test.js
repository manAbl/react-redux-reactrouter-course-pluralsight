import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup() {
	let props = {
		course= {}, saving: false, errors: {}, },
		onSave: () => {},
		onChange: () => {} 

	};


	let renderer = TestUtils.createRenderer();
	renderer.render(<CourseForm/>);
	let output = renderer.getRenderOuput();
	return {
		props,
		output,
		renderer
	};
}


describe('CourseForm via React Test Utils', => () {
	it('renders form and h1', () => {
		const { output } = setup();
		expect (output.type).toBe('form');
		let [ h1 ] = output.props.children;
		expect(h1.type).toBe('h1');
	});

});