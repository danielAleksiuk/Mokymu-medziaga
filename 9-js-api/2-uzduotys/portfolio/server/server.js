const express = require('express')
const app = express()
const cors = require('cors')

const projects = require('./data/projects.json')
const workExperience = require('./data/work.json')
const education = require('./data/education.json')
const courses = require('./data/courses.json')

const port = 7788

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    return res.send('Hello World!')
})

app.get('/projects/latest/:count', (req, res) => {
    const latestProjects = [...projects].sort((a, b) => b.id - a.id).slice(0, req.params.count)
    return res.json(latestProjects)
})

app.get('/projects/technologies', (req, res) => {
    const technologies = [...new Set(projects.map(project => project.technologies).flat())]
    return res.json(technologies)
})

app.get('/projects/technologies/:technology', (req, res) => {
    const projectsByTechnology = projects.filter(project => {
        return project.technologies.join(' ').toLowerCase().split(' ')
            .includes(req.params.technology.toLowerCase())
    })
    return res.json(projectsByTechnology)
})

app.get('/projects', (req, res) => {
    return res.json(projects)
})

app.get('/work-experience/latest/:count', (req, res) => {
    const latestWorkExperience = [...workExperience].sort((a, b) => { 
        if (a.date > b.date) return -1
        if (a.date < b.date) return 1
        return 0
    }).slice(0, req.params.count)
    return res.json(latestWorkExperience)
})

app.get('/work-experience', (req, res) => {
    return res.json(workExperience)
})

app.get('/education/latest/:count', (req, res) => {
    const latestEducation = [...education].sort((a, b) => { 
        if (a.year > b.year) return -1
        if (a.year < b.year) return 1
        return 0
    }).slice(0, req.params.count)
    return res.json(latestEducation)
})

app.get('/education', (req, res) => {
    return res.json(education)
})

app.get('/courses/latest/:count', (req, res) => {
    const latestCourses = [...courses].sort((a, b) => {
        if (a.completed > b.completed) return -1
        if (a.completed < b.completed) return 1
        return 0
    }).slice(0, req.params.count)
    return res.json(latestCourses)
})

app.get('/courses/technologies', (req, res) => {
    const technologies = [...new Set(courses.map(course => course.tags).flat())]
    return res.json(technologies)
})

app.get('/courses/technologies/:technology', (req, res) => {
    const coursesByTechnology = courses.filter(course => {
        return course.tags.join(' ').toLowerCase().split(' ')
            .includes(req.params.technology.toLowerCase())
    })
    return res.json(coursesByTechnology)
})

app.get('/courses', (req, res) => {
    return res.json(courses)
})

app.listen(port, () => {
    console.log(`Portfolio app listening on port ${port}`)
})
