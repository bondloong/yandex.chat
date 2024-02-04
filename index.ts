import Handlebars from 'handlebars';
import greetings from './templates/greeting.templ.ts';
import button from './partials/button.templ.ts';

Handlebars.registerPartial('button', button);

document.addEventListener('DOMContentLoaded', () => {
	const app = document.querySelector('#app');

	const template = Handlebars.compile(greetings);

	const result = template({ username: 'Alexey' })

	if (app) {
		app.innerHTML = result;
	} else {
		console.log('app element not found')
	}
})