var fs = require('fs')
var dbPath = './db.json'

/**
 * 查询所有学生
 */
exports.findAll = function (callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(data))
    })
}

/**
 * 根据id查询学生信息
 */
exports.findByid = function (id, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        let ret = students.find(function (item) {
            return item.id === parseInt(id)
        })
        callback(null, ret)
    })
}

/**
 * 增加学生
 */
exports.save = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        student.id = students[students.length - 1].id + 1
        students.push(student)
        let ret = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, ret, function (err) {
            if (err) {
                callback(err)
            }
            callback(null)
        })
    })
}

/**
 * 修改学生信息
 */
exports.updateById = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students

        student.id = parseInt(student.id)

        let stu = students.find(function (item) {
            return item.id === student.id
        })
        for (let key in student) {
            stu[key] = student[key]
        }

        let ret = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, ret, function (err) {
            if (err) {
                callback(err)
            }
            callback(null)
        })
    })
}

/**
 * 删除学生
 */
exports.deleteById = function (id, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        let deleteId = students.findIndex(function (item) {
            return item.id === parseInt(id)
        })
        console.log(deleteId)
        students.splice(deleteId, 1)

        var ret = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, ret, function (err) {
            if (err) {
                callback(err)
            }
            callback(null)
        })
    })
}