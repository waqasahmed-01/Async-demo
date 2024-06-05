console.log('Before');
getData(1, function (user) {
  console.log(user);
  getUser('Aamir', displayMessage);
});
console.log('After');

function getData(id, callback) {
  setTimeout(() => {
    console.log('Accessing database...');
    callback({ id: id, gitHubUsername: 'waqasahmed-01' });
  }, 3000);
}

function getUser(user, displayCallback) {
  setTimeout(() => {
    console.log(`User : ${user}`);
    displayCallback();
  }, 3000);
}

function displayMessage() {
  setTimeout(() => {
    console.log('User logged successfully...');
  }, 5000);
}
