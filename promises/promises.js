let promise = new Promise(function (resolve, reject) {
	const x = "hello";
	const y = "hello_shreya";
	if (x === y) {
		resolve();
	} else {
		reject();
	}
});

promise.
	then(function () {
		console.log('Success');
	}).
	catch(function () {
		console.log('Some error has occurred');
	});
