const router = require("express").Router();
const Workout = require('../models/workout');

router.get('/api/workouts', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration:{
                    $sum: '$exercises.duration',
                },
            },
        },
    ]).then((dbWorkouts) => {
        res.json(dbWorkouts);
    }).catch((err) => {
        console.log("/workouts", err);
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    const { body, params } = req;
    Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } })
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        console.log("/api/workouts/:id", err);
        res.status(400).json(err);
      });
  });

module.exports = router;