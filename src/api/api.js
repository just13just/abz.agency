export const usersAPI = {
    getUsers(page = 1) {
        return fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`)
    }
}
export const formAPI = {
    getToken() {
        return fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/token`)
    }
}