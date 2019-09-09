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
      this.currentlyPlaying.push(object.name);
      this.openings = this.openings - group.length;
      console.log(this.openings);


  }

}



module.exports = GolfCourse;
