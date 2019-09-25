let userController = require("./controllers/users");
let mockResponse = {
    json:(body)=>{
        console.log(body);
        return mockResponse;
    },
    send:(body)=>{
        console.log(body)
        return mockResponse;
    },
    status: (code)=>{
        console.log(code)
        return mockResponse;
    }
}
let mockRequest = {
    params:{id:1},
    body: {first_name: "newuser",last_name:"was inserted"}

}

//UNCOMMENT WHATEVER YOU ARE TRYING TO TEST
userController.getAllUsers(mockRequest,mockResponse);
userController.getUserById(mockRequest,mockResponse);
userController.createUser(mockRequest,mockResponse);
userController.updateUserById(mockRequest,mockResponse);
userController.deleteUserByFirstName(mockRequest,mockResponse);
