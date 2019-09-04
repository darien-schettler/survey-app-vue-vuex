/*
	This is where I will mock out my AJAX functions that will mock the requests/responses. 
	In this new file cut and paste the surveys array from the Home.vue component as a global constant.
*/

const surveys = [{
	id: 1,
	name: 'General Lifestyle',
	created_at: new Date(2019, 7, 11),
	questions: [{
		id: 1,
		text: 'How Often Do You Participate in Some Form of Exercise?',
		choices: [{
			id: 1,
			text: 'Never',
			selected: 0
		}, {
			id: 2,
			text: '1 to 3 Times Per Month',
			selected: 0
		}, {
			id: 3,
			text: '1 to 2 Times Per Week',
			selected: 0
		}, {
			id: 4,
			text: '3 to 4 Times Per Week',
			selected: 0
		}, {
			id: 5,
			text: '5 or More Times Per Week',
			selected: 0
		}]
	}, {
		id: 2,
		text: 'How Active Do You Consider Your Occupation (Or Non-Excercise Day-to-Day Activities)?',
		choices: [{
			id: 6,
			text: 'Very Active',
			selected: 0
		}, {
			id: 7,
			text: 'Somewhat Active',
			selected: 0
		}, {
			id: 8,
			text: 'Average',
			selected: 0
		}, {
			id: 9,
			text: 'Not Very Active',
			selected: 0
		}, {
			id: 10,
			text: 'Not Active at All',
			selected: 0
		}]
	}, {
		id: 3,
		text: 'On A Scale From 1 to 5 - 5 Being the Best, 1 Being the Worst - How Healthy Do You Consider Your Diet To Be?',
		choices: [{
			id: 11,
			text: '5',
			selected: 0
		}, {
			id: 12,
			text: '4',
			selected: 0
		}, {
			id: 13,
			text: '3',
			selected: 0
		}, {
			id: 14,
			text: '2',
			selected: 0
		}, {
			id: 15,
			text: '1',
			selected: 0
		}]
	}, {
		id: 4,
		text: 'On A Scale From 1 to 5 - 5 Being the Best, 1 Being the Worst - How Much Stress Do You Typically Experience Daily?',
		choices: [{
			id: 16,
			text: '5',
			selected: 0
		}, {
			id: 17,
			text: '4',
			selected: 0
		}, {
			id: 18,
			text: '3',
			selected: 0
		}, {
			id: 19,
			text: '2',
			selected: 0
		}, {
			id: 20,
			text: '1',
			selected: 0
		}]
	}]
}, {
	id: 2,
	name: 'Eating Habits',
	created_at: new Date(2019, 7, 11),
	questions: [{
		id: 5,
		text: 'How Many Times A Week Do You Skip Breakfast On Average',
		choices: [{
			id: 21,
			text: 'Never',
			selected: 0
		}, {
			id: 22,
			text: '1-2 Times',
			selected: 0
		}, {
			id: 23,
			text: '3-4 Times',
			selected: 0
		}, {
			id: 24,
			text: '5-6 Times',
			selected: 0
		}, {
			id: 25,
			text: 'Every Day',
			selected: 0
		}]
	}, {
		id: 6,
		text: 'How Many Portions of Fruit Do You Eat Daily On Average',
		choices: [{
			id: 26,
			text: '0 Portions',
			selected: 0
		}, {
			id: 27,
			text: '1-2 Portions',
			selected: 0
		}, {
			id: 28,
			text: '3-4 Portions',
			selected: 0
		}, {
			id: 29,
			text: '5-6 Portions',
			selected: 0
		}, {
			id: 30,
			text: 'More Than 6 Portions',
			selected: 0
		}]
	}, {
		id: 7,
		text: 'How Many Times A Week Do You Eat Processed Meats On Average (Ham, Bacon, Salami...)',
		choices: [{
			id: 31,
			text: 'I Do Not Eat Processed Meats',
			selected: 0
		}, {
			id: 32,
			text: '1-2 Times',
			selected: 0
		}, {
			id: 33,
			text: '3-5 Times',
			selected: 0
		}, {
			id: 34,
			text: '6-8 Times',
			selected: 0
		}, {
			id: 35,
			text: '9 Or More Times',
			selected: 0
		}]
	}, {
		id: 8,
		text: 'How Many Cups of Water Do You Consume Daily On Average',
		choices: [{
			id: 36,
			text: '1-2 Cups',
			selected: 0
		}, {
			id: 37,
			text: '3-5 Cups',
			selected: 0
		}, {
			id: 38,
			text: '6-8 Cups',
			selected: 0
		}, {
			id: 39,
			text: '9-11 Cups',
			selected: 0
		}, {
			id: 40,
			text: 'More Than 12 Cups',
			selected: 0
		}]
	}]
}]

/*
Function fetchSurveys returns a promise with the array of surveys after waiting 300 milliseconds (to simulate the API delay). 
The function will need to be exported so that it can be accessed from the Home component.
*/
export function fetchSurveys() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(surveys)
		}, 300)
	})
}

/* A mock AJAX function, which is called from the Survey component's beforeMount hook to fetch a survey by :id. */
export function fetchSurvey(surveyId) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const survey = surveys.find(survey => survey.id === surveyId)
			if (survey) {
				resolve(survey)
			} else {
				reject(Error('Survey does not exist'))
			}
		}, 300)
	})
}

// This function receives a survey response object and simply console logs "saving survey response..."
export function saveSurveyResponse(surveyResponse) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("saving survey response...")
		})
		resolve()
	}, 300)
}