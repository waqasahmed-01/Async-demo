// async-demo Js.

function getData(dataId, nextData) {
  setTimeout(function () {
    console.log(dataId);
    if (nextData) {
      nextData();
    }
  }, 3000);
}
console.log('Calling instagram username...');

//Callback Hell.
getData('waqas.ahmed01_', () => {
  console.log('Calling GitHub username...');
  getData('aamirwaqas-01', () => {
    console.log('Calling Facebook username...');
    getData('waqas.ahmed.019', () => {
      console.log('Calling LinkedIn username...');
      getData('waqasahmed01');
    });
  });
});
