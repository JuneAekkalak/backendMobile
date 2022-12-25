const RecordDetail = require('../model/recorddetail');
const DailyRecord = require('../model/dailyrecord');

// exports.getAllDailyRecord = (req, res, next) => {
//     RecordDetail.findAll().then(recorddetail => {
//         res.status(200).json({
//             "message": "success",
//             "data": recorddetail[0]
//         });
//     }).catch(error => {
//         res.status(500).json({
//             "message": error
//         });
//     });
// }
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
//     result = latestId ;
//     console.log(result);
//     // Use the latestId variable here
// });

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
    // const DailyRecord_id = req.body.DailyRecord_id;
    // console.log(Symptom_id);
    // Symptom_id.forEach(id => {
    //     console.log(id);
    //     const recorddetail = new RecordDetail(id, DailyRecord_id);
    //     recorddetail.save().catch((error) => {
    //         res.status(200).json({
    //             "message": error,
    //             "result": false
    //         });
    //     });
    // });
    res.send({ success: 'Values inserted successfully' });
}

// exports.getRecordDetailById = (req, res, next) => {
//     const id = req.params.id;
//     RecordDetail.findById(id).then((recorddetail) => {
//         res.status(200).json({
//             "message": "success",
//             "data": recorddetail[0]
//         });
//     }).catch((error) => {
//         res.status(500).json({
//             "message": error
//         });
//     });
// }