const RecordDetail = require('../model/recorddetail');
const DailyRecord = require('../model/dailyrecord');

exports.addRecordDetail = (req, res, next) => {
    const Symptom_id = req.body.Symptom_id;
    async function getLatestId() {
        try {
            const [getDailyRecord] = await DailyRecord.getIdRecord();
            const daily = getDailyRecord;
            return daily[0].id;

        } catch (error) {
            console.error(error);
        }
    }
    getLatestId().then((latestId) => {
        console.log(latestId);
        console.log(Symptom_id);

        Symptom_id.forEach(id => {
            console.log(id);
            const recorddetail = new RecordDetail(id, latestId);
            recorddetail.save().catch((error) => {
                res.status(200).json({
                    "message": error,
                    "result": false
                });
            });
        });
    });
    res.send({ success: 'Values inserted successfully' });
}

exports.editRecordDetail = (req, res, next) => {
    const Symptom_id = req.body.Symptom_id;
    const DailyRecord_id = req.body.DailyRecord_id;


    RecordDetail.delById(DailyRecord_id).then(
        Symptom_id.forEach(id => {
            console.log(id);
            console.log(DailyRecord_id);
            const recorddetail = new RecordDetail(id, DailyRecord_id);
            recorddetail.save().catch((error) => {
                res.status(200).json({
                    "message": error,
                    "result": false
                });
            });
        })).catch((error) => {
            res.status(200).json({
                "message": error,
                "result": false
            });
        });;
    res.send({ success: 'Values inserted successfully' });
    // async function getLatestId() {
    //     try {
    //         const [getDailyRecord] = await DailyRecord.getIdRecord();
    //         const daily = getDailyRecord;
    //         return daily[0].id;

    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    // getLatestId().then((latestId) => {
    //     console.log(latestId);
    //     console.log(Symptom_id);

    // });
    // res.send({ success: 'Values inserted successfully' });
}
