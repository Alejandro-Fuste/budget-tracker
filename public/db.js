let db;
// create a new db request for a "budget" database.
const request = window.indexedDB.open('budget', 1);

request.onsuccess = (event) => {
	console.log(request.result.name);
};
