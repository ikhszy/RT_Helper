import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin',
        email: 'ikhszy@gmail.com',
        password: bcrypt.hashSync('password123'),
        isAdmin: true
    },
    {
        name: 'Jane Doe',
        email: 'jane@doe.com',
        password: bcrypt.hashSync('password123'),
        isAdmin: false
    },
    {
        name: 'John Doe',
        email: 'John@doe.com',
        password: bcrypt.hashSync('password123'),
        isAdmin: false
    }
];

export default users;