export const usersAPI = {
    getUsers(page = 1) {
        return fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`)
    }
}
export const formAPI = {
    getToken() {
        return fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/token`)
    },
    getPositions() {
        return fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/positions`)
    },
    saveUser(data, token) {
        return fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
            method: "post",
            headers: new Headers({
                Accept: "multipart/form-data",
                'Token': token,
            }),
            body: data
        })
    }
}