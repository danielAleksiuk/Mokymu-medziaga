const express = require('express')
const app = express()
const cors = require('cors')

const pets = require('./data/pets.json')

app.use(express.json())
app.use(cors())

const port = 7789

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/pets/filters-list', (req, res) => {
    const filters = {
        age: [...new Set(pets.map(pet => pet.age))].sort((a, b) => a - b),
        type: [...new Set(pets.map(pet => pet.type))],
        breed: [...new Set(pets.map(pet => pet.breed))],
        vaccinated: [...new Set(pets.map(pet => pet.vaccinated))],
        state: [...new Set(pets.map(pet => pet.state))],
        features: [...new Set(pets.map(pet => pet.features).flat())]
    }

    return res.json(filters)
})

app.get('/pets/filtered', (req, res) => {
    let { age, type, breed, vaccinated, state, features } = req.query

    let filteredPets = pets

    if (age) {
        age = parseInt(age)
        filteredPets = filteredPets.filter(pet => pet.age <= age)
    }

    if (type) {
        type = type.replace(/_/g, ' ').toLowerCase()
        filteredPets = filteredPets.filter(pet => pet.type.toLowerCase() === type)
    }

    if (breed) {
        breed = breed.replace(/_/g, ' ').toLowerCase()
        filteredPets = filteredPets.filter(pet => pet.breed.toLowerCase() === breed)
    }

    if (vaccinated) {
        vaccinated = vaccinated === 'true'
        filteredPets = filteredPets.filter(pet => pet.vaccinated === vaccinated)
    }

    if (state) {
        state = state.replace(/_/g, ' ').toLowerCase()
        filteredPets = filteredPets.filter(pet => pet.state.toLowerCase() === state)
    }

    if (features) {
        features = features.replace(/_/g, ' ').toLowerCase().split(',')

        filteredPets = filteredPets.filter(pet => {
            return features.some(feature => pet.features.join(',').toLowerCase().includes(feature))
        })
    }

    return res.json(filteredPets)
})

app.get('/pets/:id', (req, res) => {
    const id = parseInt(req.params.id)
    
    const pet = pets.find(pet => pet.id === id)

    if (!pet) {
        return res.status(404).json({ message: 'Pet not found' })
    }

    return res.json(pet)
})

app.get('/pets', (req, res) => {
    return res.json(pets)
})

app.listen(port, () => {
    console.log(`Gyvunu prieglaudos back klausosi ant port: ${port}`)
})
