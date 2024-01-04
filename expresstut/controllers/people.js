const {people} = require("../data");

const getPeople = (req, res) => {
    res.json({data: people});
}

const createPerson = (req, res) => {
    const {name} = req.body;

    if(!name){
        res.status(404).json({success: false, msg: "Please provide proper value"});
    }
    else{
        res.status(201).json({success: true, person: name});
    }
}

const createPostmanPerson = (req, res) => {
    const {name} = req.body;

    if(!name){
        res.status(404).json({success: false, msg: "Please provide proper value"});
    }
    else{
        res.status(201).json({success: true, data: [...people, name]});
    }
}

const updatePerson = (req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    const person = people.find(person => person.id === Number(id));

    if(!person){
        res.status(400).json({success: false, msg: `Person with id ${id} not found`});
    }

        const updatedPeople = people.map(person => {
            if(person.id === Number(id)){
                person.name = name;
            }

            return person;
        })

        res.json({success: true, msg: {data: updatedPeople}});
}

const deletePerson = (req, res) => {
    const {id} = req.params;
    
    const person = people.find(person => person.id === Number(id));

    if(!person){
        res.status(404).json({success: false, msg: `Person with id ${id} not found`});
    }

    const updatedPeople = people.filter(person => person.id !== Number(id));

    res.json({success: true, msg: {data: updatedPeople}})
}

module.exports = {
    getPeople,
    createPerson,
    createPostmanPerson,
    updatePerson,
    deletePerson
}