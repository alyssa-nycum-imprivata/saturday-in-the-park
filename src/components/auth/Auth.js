// import ApiManager from '../../modules/ApiManager';

// const Auth = () => {
//     const isAuthenticated = () => sessionStorage.getItem("kennywood-token") !== null;

//     const login = (credentials) => {
//         return ApiManager.loginCustomer(credentials)
//             .then(parsedResp => {
//                 if("valid" in parsedResp && parsedResp.valid && "token" in parsedResp) {
//                     sessionStorage.setItem("kennywood-token", parsedResp.token)
//                 }
//             });
//     };

//     const logout = () => {
//         sessionStorage.removeItem("kennywood-token")
//     };

//     return { isAuthenticated, logout }
// };

// export default Auth;