console.log('Before');
getUser(1, (user) => {
  console.log(user);
  getRepositories(user.gitHubUsername, function (repo) {
    console.log(repo);
    getCommits(repo, (commits) => {
      console.log(commits[2]);
    });
  });
});

function getUser(id, callback) {
  setTimeout(function () {
    console.log('Getting user data...');
    const user = {
      id: id,
      gitHubUsername: 'waqasahmed-01',
    };
    callback(user);
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(function () {
    console.log('Calling GitHub repos...');
    const repo = ['repo1', 'repo2', 'repo3'];
    callback(repo);
  }, 2000);
}

function getCommits(repo, callback) {
  setTimeout(function () {
    console.log('Getting lists of commits...');
    const commits = ['commit1', 'commit2', 'commit3'];
    callback(commits);
  }, 2000);
}
console.log('After');
