const utils = require('./utils');

const users = [
    {
        firstName: 'jon',
        lastName: 'doe',
        age: 20
    },
    {
        firstName: 'jane',
        lastName: 'doe',
        age: 10
    }
];

const result = utils.generateUserList(users);
console.log(result);

const allUserNames = utils.getUserNames(users);
console.log(allUserNames);

console.log(Object.isFrozen(utils.generateUserList, utils.getUserNames))