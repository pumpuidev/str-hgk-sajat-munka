const generateUserList = (users) => {
    return users.map(user => {
        return {
            fullName: `${user.lastName} ${user.firstName}`,
            isAdult: user.age >= 18
        };
    });
}

const getUserNames = (users) => users.map(item => `${item.lastName} ${item.firstName}`).join(',')

module.exports = Object.freeze({
    generateUserList,
    getUserNames
});