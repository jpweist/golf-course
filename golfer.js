class Golfer {
  constructor(object) {
    this.name = object.name;
    this.handicap = object.handicap;
    this.frustration = 0;
    this.confidence = 0;
  }
  calculateAvg() {
    var average = 72 + this.handicap;
    return `I usually shoot a ${average} on average.`
    }
    playRound(golfCourse) {
      if (golfCourse.difficulty === 'hard') {
        this.frustration = 500;
      } if (golfCourse.difficulty === 'moderate') {
        this.frustration = 100;
      }
    }
    hitTheRange(){
      this.confidence += 10;
    }
    marvel(golfCourse) {
      return `I love the ${golfCourse.features[0]} and ${golfCourse.features[1]} on this course!`
    }
    whatYaShoot(round) {
      if (round === 4) {
        this.frustration =+ 20;
        return `Doh!`;
      } if (round === 0 ) {
        this.frustration =+ 10;
        return `Booyah!`;
      } if (round === 2) {
        this.frustration =+ 30;
        return `Doh!`;
      } if (round <= -1) {
        this.frustration =+ 0;
        return `I AM THE GREATEST GOLFER ALIVE!`;
      } if (round === 3) {
        this.frustration =+ 20;
        return `Doh!`;
      }
    }
}

module.exports = Golfer;
