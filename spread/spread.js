let video = ['youtube', 'vimeo', 'rutube'];
let blogs = ['wordpress', 'livejournal', 'blogger'];
let internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);


function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(a + b + c);
}

let numbers = [2, 5, 7];

log(...numbers);