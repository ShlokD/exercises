const async = () => {
  const sequence = (callbacks) => {
    let executor;
    let data;
    const length = callbacks.length;

    const execute = function (index) {
      if (index === length) {
        executor(null, data);
      } else {

        const currentFunction = callbacks[index];


        currentFunction(function (err, currData) {
          data = currData;
          execute(index + 1);
        }, data)
      }
    }
    return function (cb) {
      executor = cb;
      execute(0);
    }
  };

  const parallel = callbacks => {
    let executor;
    const data = [];
    const length = callbacks.length;
    let total = 0;

    const execute = function () {
      for(let i = 0; i < length; ++i) {
        function next(index) {
          currentFunction = callbacks[index];
          currentFunction((err, currData) => {
            data[index] = currData;
            total++;
            if (total === length) {
              executor(null, data);
            }
          });
        }

        next(i);
      }
    }
    return function (cb) {
      executor = cb;
      execute();
    }
  };

  const race = callbacks => {
    let executor;
    let data = null;
    const length = callbacks.length;
    let total = 0;

    const execute = function () {
      for(let i = 0; i < length; ++i) {
        function next(index) {
          currentFunction = callbacks[index];
          currentFunction((err, currData) => {
            data = currData;
            total++;
            if (total === 1) {
              executor(null, data);
            }
          });
        }

        next(i);
      }
    }
    return function (cb) {
      executor = cb;
      execute();
    }
  };

  return {
    race: race,
    parallel: parallel,
    sequence: sequence
  }
}
module.exports = async();