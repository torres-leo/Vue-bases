const { createApp, ref } = Vue;

const app = createApp({
	// template: `
	// <h1>Hello World</h1>
	// `,
	data() {
		return {
			message: 'Khe',
		};
	},
	// setup() {
	// 	const message = ref('Hello vue!');
	// 	return {
	// 		message,
	// 	};
	// },
});

app.mount('#app');
