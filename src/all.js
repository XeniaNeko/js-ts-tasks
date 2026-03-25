/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
function all(promisesArray) {
  return new Promise((resolve, reject) => {
    const results = new Array(promisesArray.length);
    let completed = 0;

    for (let i = 0; i < promisesArray.length; i++) {
      Promise.resolve(promisesArray[i])
        .then(value => {
          results[i] = value;
          completed++;

          if (completed === promisesArray.length) {
            resolve(results);
          }
        })
        .catch(error => {
          reject(error);
        });
    }
  });
}

module.exports = { all };