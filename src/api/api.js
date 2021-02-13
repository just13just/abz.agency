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
    saveUser(values, token) {
        let data = new FormData()
        data.append("name", values.name)
        data.append("email", values.email)
        data.append("phone", values.phone)
        data.append("position_id", values.picked)
        data.append("photo", values.photo)
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