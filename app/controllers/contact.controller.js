exports.create = (req, res) => {
    res.send({ message: "create handler"});
    next(err);
};

exports.findAll = (req, res) => {
    res.send({message: "findAll handler"});
    next(err);
};

exports.findOne = (req, res) => {
    res.send({message: "findOne handler"});
    next(err);
};

exports.update = (req, res) => {
    res.send({message: "update handler"});
    next(err);
};

exports.delete = (req, res) => {
    res.send({message: "delete handler"});
    next(err);
}

exports.deleteAll = (req, res) => {
    res.send({message: "deleteAll handler"});
    next(err);
};

exports.findAllFavorite = (req, res) => {
    res.send({message: "findAllFavorite handler"});
    next(err);
};

