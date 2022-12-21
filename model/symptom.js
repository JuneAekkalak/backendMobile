const db = require('../database/db');

module.exports = class Symptom {

    constructor(id, symptomName, discription, imageUr, BodyType_id) {
        this.id = id;
        this.symptomName = symptomName;
        this.discription = discription;
        this.imageUr = imageUr;
        this.BodyType_id = BodyType_id;
    }

    static findAll() {
        return db.execute("SELECT * FROM Symptom");
    }

    save() {
        if (this.id) {
            return db.execute(
                'update Symptom set symptomName=?, discription=?, imageUr=?,  BodyType_id=? where id = ?',
                [this.symptomName, this.discription, this.imageUr, this.BodyType_id, this.id]
            );
        } else {
            return db.execute(
                'insert into Symptom(symptomName, discription , imageUr, BodyType_id) values(?,?,?,?)',
                [this.symptomName, this.discription, this.imageUr, this.BodyType_id]
            );
        }
    }
    //'select * from products where p_id = ?',
    static findById(id) {
        return db.execute(
            'select * from Symptom where id = ?',
            [id]
        );
    }

    static findByIdBodyType(BodyType_id) {
        return db.execute(
            'select * from Symptom INNER join BodyType on Symptom.BodyType_id = BodyType.id where BodyType_id = ?',
            [BodyType_id]
        )
    }

    static delById(id) {
        return db.execute(
            'delete from Symptom where id = ?',
            [id]
        );
    }
}