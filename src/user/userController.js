var userService = require('./userServices');

var createUserControllerFunc = async (req, res) =>  {
    try {
    console.log(req.body);
    var status = await userService.createUserDBService(req.body);
    console.log(status);

    if (status) {
        res.send({ "status": true, "message": "Error creando usuario" });
    } else {
        res.send({ "status": false, "message": "Usuario creado" });
    }
    }
    catch(err) {
        console.log(err);
    }
}

var loginUserControllerFunc = async (req, res) => {
    var result = null;
    try {
        result = await userService.loginuserDBService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }

    } catch (error) {
        console.log("Login error... " + error);
        res.send({ "status": false, "message": error.msg });
    }
}

var findUserControllerFunc = async(req, res) => {
    try {
        result = await userService.findUserDBService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }
    } catch (error) {
        console.log("Find error... " + error);
        res.send({ "status": false, "message": error.msg });
    }
}

var deleteUserControllerFunc = async(req, res) => {
    try {
        result = await userService.deleteUserDBService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }
    } catch (error) {
        console.log("Delete error... " + error);
        res.send({ "status": false, "message": error.msg });
    }
}

module.exports = { createUserControllerFunc, loginUserControllerFunc, findUserControllerFunc, deleteUserControllerFunc};