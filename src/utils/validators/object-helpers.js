export const updateObjectInArray = (users, userId, objPropName, newObjProps) => {
    return users.map(user => {
        if (user[objPropName] === userId) {
            return { ...user, ...newObjProps }
        };
        return user;
    });
};