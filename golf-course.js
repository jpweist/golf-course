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
    if (this.openings >  0 ) {
      for (var i = 0; i < 5; i++)
      this.currentlyPlaying.push(group);
      this.openings = group.length;
      console.log(this.openings);
    } else {
      console.log(this.openings);

    }


  }

}



module.exports = GolfCourse;
