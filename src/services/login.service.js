const registerUser = (userData) => {
    // call  api service
    //return  result: user
    let user = {
        id: '12345',
        status: 'verification_pending',
        name: userData.firstName,
        email: userData.email
    }
    return user;
}

const validateUserData = (userData) => {
    // validate user data and return true/false based on valid data
    return userData.firstName && userData.lastName && userData.email && userData.password ? true : false
}

const verifyEmail = (userId, token) => {
    // call  api service
    //return  result: user

    let user = {
        id: '12345',
        status: 'verified'
    }
    return userId && token ? user : { error: 'expired or invalid token' };
}

const logIn = (userData) => {

    // call  api service
    //return  result: user
    let user = {
        id: '12345',
        status: 'verified',
        token: 'JWT token',
        name: userData.firstName,
        email: userData.email
    }
    return user;
}

export {
    registerUser,
    validateUserData,
    verifyEmail,
    logIn
}