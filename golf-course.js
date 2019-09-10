class GolfCourse {
  constructor(name, difficulty, openings, features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];

  }

  checkInGroup(group) {
    if (this.openings - group.length >= 0) {
      this.openings = this.openings - group.length;
      for (var i = 0; i < group.length; i++) {
        var name = group[i].name;
        this.currentlyPlaying.unshift(name);

      }
    }

    }
    recommendTees(golfer) {
        if (golfer.handicap === 10) {
          return 'You should play from the Difficult Tees.';
      } if (golfer.handicap >= 11 && golfer.handicap <= 14) {
          return  'You should play from the Middle Tees.';
      } if (golfer.handicap === 15) {
        return 'You should play from the Forward Tees.';
      }


    }

}



module.exports = GolfCourse;
