const DailyRecord = require('../model/dailyrecord');

exports.getAllDailyRecord = (req, res, next) => {
    DailyRecord.findAll().then(dailyrecord => {
        res.status(200).json({
            "message": "success",
            "data": dailyrecord[0]
        });
    }).catch(error => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.addDailyRecord = (req, res, next) => {
    const dateRecord = req.body.dateRecord;
    const dailyDescription = req.body.dailyDescription;
    const User_id = req.body.User_id;

    const dailyrecord = new DailyRecord(null, dateRecord, dailyDescription,User_id);
    dailyrecord.save().then(() => {
        res.status(200).json({
            "message": "success",
            "result": true
        });
    }).catch((error) => {
        res.status(200).json({
            "message": error,
            "result": false
        });
    });
}

exports.getDailyRecordById = (req, res, next) => {
    const id = req.params.id;
    DailyRecord.findById(id).then((dailyrecord) => {
        res.status(200).json({
            "message": "success",
            "data": dailyrecord[0]
        });
    }).catch((error) => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.getDailyRecordByDate = (req, res, next) => {
    const date = req.params.date;
    const User_id = req.params.User_id;
    DailyRecord.getDailyRecordByDate(date,User_id).then((dailyrecord) => {
        res.status(200).json({
            "message": "success",
            "data": dailyrecord[0]
        });
    }).catch((error) => {
        res.status(500).json({
            "message": error
        });
    });
}