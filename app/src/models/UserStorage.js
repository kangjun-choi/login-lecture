"use strict";

class UserStorage {
    // #users => users란 변수를 public한 상태에서 private한 상태로 변경
    // 외부에서 불러올 수 없게 된다.
    // 외부에서 불러올 수 있도록 만들기 위해서 static 형식으로 getUsers 메서드를 생성하여 불러올 수 있도록 만든다.
    static #users = {
        id: ['huge', '백엔드', '최사원'],
        password: ['1234', '5678', '9012'],
        name: ['일이삼','일삼이','일삼삼'],
    };


    // ...변수명 => 파라미터 개수에 상관없이 변수들을 배열로 만듬.
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            // if (users.hasOwnProperty(field)) : users에 field라는 key값이 존재하면
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }

            return newUsers;
        }, {});

        return newUsers;
    }
}


module.exports = UserStorage;