export const PORT = 5000;

export const DB_CONNECTION_STRING = "mongodb://localhost/employee";

export const SALT = 10;
export const JWT = {
    secret: 'verysecreteword',
    tokens: {
        access: {
            type: 'access',
            expiresIn: '100m',
        },
    },
};

export const HELP_AUTH = {
    Authorization: 'Authorization',
    Bearer: 'Bearer',
};

export const GENDER = {
    MALE: 'MALE',
    FEMALE: 'FEMALE',
};