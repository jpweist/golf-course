class GolfCourse {
  constructor(name, difficulty, openings, features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];

  }

  checkInGroup(group) {
    console.log(this.openings);
    if (this.openings - group.length > 0) {
      for (var i = 0; i < group.length; i++)
      this.currentlyPlaying.unshift(group[i].name);
      this.openings = this.openings - group.length;
      console.log(this.openings);
    }

    }

}



module.exports = GolfCourse;
