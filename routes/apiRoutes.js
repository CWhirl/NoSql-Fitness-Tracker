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

module.exports = router;