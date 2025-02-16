/* function Timer(seconds) {
  this.seconds = seconds;
}

Timer.prototype.start = function () {
  var instance = this;
  var timerInterval = setInterval(function () {
    if (instance.seconds === 0) {
      clearInterval(timerInterval);
    }

    console.log(instance.seconds);
    instance.seconds -= 1;
  }, 1000);
};

Timer.prototype.start = () => {
  const timerInterval = setInterval(() => {
    if (this.seconds === 0) {
      clearInterval(timerInterval);
    }

    console.log(instance.seconds);
    instance.seconds -= 1;
  }, 1000);
};

export default Timer; */

class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }

  start() {
    const timerInterval = setInterval(() => {
      if (this.seconds === 0) {
        clearInterval(timerInterval);
      }
      console.log(this.seconds -= 1);
    }, 1000);
  }
}

export default Timer;
