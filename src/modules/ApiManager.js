const baseUrl = "http://localhost:8000";

const ApiManager = {
    registerNewCustomer(newCustomer) {
        return fetch(`${baseUrl}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newCustomer)
        })
            .then(resp => resp.json())
            .then(parsedResp => {
                if ("token" in parsedResp) {
                    sessionStorage.setItem("kennywood-token", parsedResp.token)
                }
            })
    },
    loginCustomer(credentials) {
        return fetch(`${baseUrl}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(credentials)
        })
            .then(resp => resp.json())
            .then(parsedResp => {
                if ("token" in parsedResp) {
                    sessionStorage.setItem("kennywood-token", parsedResp.token)
                }
            })
    },
    getAllParkAreas() {
        return fetch(`${baseUrl}/parkareas`).then(resp => resp.json())
    }
};

export default ApiManager;