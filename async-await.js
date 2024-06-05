console.log('Before');

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
      const repos = ['repo1', 'repo2', 'repo3'];
      resolve(repos);
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
async function displayResults() {
  try {
    const user = await getUser(1);
    console.log(user);
    const repos = await getRepositories(user.gitHubUsername);
    console.log('Repos: ' + repos);
    const commits = await getCommits(repos);
    console.log('Commits: ' + commits[1]);
  } catch (error) {
    console.log('Error', error);
  }
}
displayResults();
console.log('After');
