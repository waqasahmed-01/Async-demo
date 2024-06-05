console.log('Before');

getUser(1)
  .then((user) => {
    console.log(user);
    return getRepositories(user.id); // Chaining getRepositories after getUser
  })
  .then((repos) => {
    console.log(repos);
    return getCommits(repos[0]); // Chaining getCommits after getRepositories
  })
  .then((commits) => {
    console.log(commits);
  })
  .catch((err) => {
    console.error('Error:', err);
  });

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Getting user's data...");
      const user = {
        id: id,
        gitHubUsername: 'waqasahmed-01',
      };
      resolve(user);
    }, 2000);
  });
}

function getRepositories(id) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('Calling GitHub repos...');
      const repo = ['repo1', 'repo2', 'repo3'];
      resolve(repo);
    }, 2000);
  });
}

function getCommits(id) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('Getting lists of commits...');
      const commits = ['commit1', 'commit2', 'commit3'];
      resolve(commits);
    }, 2000);
  });
}
console.log('After');
