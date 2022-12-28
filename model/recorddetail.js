const db = require('../database/db');

module.exports = class RecordDetail {

    constructor(Symptom_id, DailyRecord_id) {
        this.Symptom_id = Symptom_id;
        this.DailyRecord_id = DailyRecord_id;
    }

    static findAll() {
        return db.execute("SELECT * FROM recorddetail");
    }

    save() {
        return db.execute(
            'insert into recorddetail(Symptom_id, DailyRecord_id) values(?,?)',
            [this.Symptom_id, this.DailyRecord_id]
        );
    }

    //    static edit () {
    //         return db.execute(
    //             'update recorddetail set Symptom_id= ? where DailyRecord_id = ?',
    //             [this.Symptom_id, this.DailyRecord_id]
    //         );
    //     }

    //'select * from products where p_id = ?',
    static findById(id) {
        return db.execute(
            'select * from recorddetail where DailyRecord_id = ?',
            [id]
        );
    }

    static delById(id) {
        return db.execute(
            'delete from recorddetail where DailyRecord_id = ?',
            [id]
        );
    }

    // static getIdRecord() {
    //     return db.execute('SELECT id FROM dailyrecord ORDER BY id DESC LIMIT 1');
    // }
}