const RecordDetail = require('../model/recorddetail');

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

exports.addRecordDetail = (req, res, next) => {
    const Symptom_id = req.body.Symptom_id;
    const DailyRecord_id = req.body.DailyRecord_id;
    // console.log(Symptom_id);
    Symptom_id.forEach(element => {
        console.log(element);
        const recorddetail = new RecordDetail(element, DailyRecord_id);
        recorddetail.save().then(() => {
        }).catch((error) => {
            res.status(200).json({
                "message": error,
                "result": false
            });
        });
    });
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