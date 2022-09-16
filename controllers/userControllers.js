const User = require('../schema/User');
console.log('Connected to user Controllers')

module.exports.newUser = (req, res) => {

    let newUser = new User({
        name: req.body.name
    })

    newUser.save()
    .then(result => res.send(result))
    .catch(error => res.send(error));

    
}

module.exports.viewUsers = (req, res) => {

    User.find({})
    .then(result => res.send(result))
    .catch(error => res.send(error)) 
}

module.exports.viewSingleUser = (req, res) => {

    User.findById(req.params.id)
    .then(result => res.send(result))
    .catch(error => res.send(error))
}