var express = require('express')
var Student = require('./students')
var router = express.Router()   //创建路由




.get('/', function (req, res) {
    res.redirect('/students')
})
/**
 * 渲染首页
 */
router.get('/students', function (req, res) {
    Student.findAll(function (err, data) {
        if (err) {
            return res.status(500).send('Sever Error')
        }
        res.render('index.html', {
            students: data.students,
            deshboard: ["语文", "英语", "数学"]
        })
    })
})/*  */

    /**
     * 渲染添加学生页面
     */
    .get('/students/new', function (req, res) {
        res.render('new.html')
    })

    /**
     * 处理添加学生请求
     * 参数：name,age,gender,hobbies
     */
    .post('/students/new', function (req, res) {
        var student = req.body
        Student.save(student, function (err, data) {
            if (err) {
                return res.status(500).send('Sever Error')
            }
            res.redirect('/students')
        })
    })

    /**
     * 渲染编辑学生信息页面
     */
    .get('/students/edit', function (req, res) {
        var stuId = parseInt(req.query.id)
        Student.findByid(stuId, function (err, data) {
            if (err) {
                return res.status(500).send('Server Error')
            }
            res.render('edit.html', {
                student: data
            })
        })
    })

    /**
     * 处理编辑学生请求
     * 参数：id,name,age,gender,hobbies
     */
    .post('/students/edit', function (req, res) {
        var student = req.body
        Student.updateById(student, function (err, data) {
            if (err) {
                return res.status(500).send('Sever Error')
            }
            res.redirect('/students')
        })
    })

    /**
     * 处理删除请求
     */
    .get('/students/delete', function (req, res) {
        let id = req.query.id
        Student.deleteById(id, function (err) {
            if (err) {
                return res.status(500).send('Sever Error')
            }
            res.redirect('/students')
        })
    })

module.exports = router