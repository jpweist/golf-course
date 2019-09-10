class GolfCourse {
  constructor(name, difficulty, openings, features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];

  }

  checkInGroup(group) {
    if (this.openings - group.length > 0) {
      for (var i = 0; i < group.length; i++)
      this.currentlyPlaying.unshift(group[i].name);
      this.openings = this.openings - group.length;
    }

    }
    recommendTees() {
      this.golfer1 = 'You should play from the Difficult Tees.';

    }

}



module.exports = GolfCourse;
