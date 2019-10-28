import { observable, decorate } from 'mobx';

class Users {
    all = [
        { id: 1, email: 'vad', pass: 'vad' },
        { id: 2, email: 'qwerty', pass: 'qwerty' },
        { id: 3, email: 'admin', pass: 'admin' }
    ]
}

decorate(Users, {
    all: observable
    [{
            id: observable,
            email: observable,
            pass: observable,
        }]
});

export default new Users();