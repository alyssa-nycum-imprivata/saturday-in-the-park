const baseUrl = "http://localhost:8000/";

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
            .then(response => response.json())
            .then(parsedResponse => {
                if ("token" in parsedResponse) {
                    sessionStorage.setItem("kennywood-token", parsedResponse.token)
                }
            })
    }
};

export default ApiManager;