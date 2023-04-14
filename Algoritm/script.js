let arr = [43, 20, 68, 5, 84, 90, 11, 66, 70, 88, 80, 7, 93, 25, 42, 48, 52, 24, 69, 56, 14, 6, 62, 4, 50, 17, 45, 81, 98, 61];
let n = arr.length;

function heapify(arr, n, i) {
	let largest = i;
	let l = 2 * i + 1;
	let r = 2 * i + 2;

	if (l < n && arr[l] > arr[largest]) {
		largest = l;
	}

	if (r < n && arr[r] > arr[largest]) {
		largest = r;
	}

	if (largest != i) {
		[arr[i], arr[largest]] = [arr[largest], arr[i]];
		setTimeout(() => {
			display();
		}, 1000);
		heapify(arr, n, largest);
	}
}

function heapSort() {
	for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
		heapify(arr, n, i);
	}

	for (let i = n - 1; i > 0; i--) {
		[arr[0], arr[i]] = [arr[i], arr[0]];
		setTimeout(() => {
			display();
		}, 1000);
		heapify(arr, i, 0);
	}
}

function display() {
	const container = document.querySelector('.container');
	container.innerHTML = '';
	for (let i = 0; i < n; i++) {
		const box = document.createElement('div');
		box.classList.add('box');
		box.innerText = arr[i];
		container.appendChild(box);
	}
}

display();
heapSort();