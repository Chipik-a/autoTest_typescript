import dotenv from 'dotenv';
dotenv.config();
var UserRole;
(function (UserRole) {
    UserRole["standard"] = "standard user";
    UserRole["visual"] = "visual user";
})(UserRole || (UserRole = {}));
export const standardUser = {
    email: 'standard_user',
    password: 'secret_sauce',
    role: UserRole.standard,
};
export const visualUser = {
    email: '',
    password: '',
    role: UserRole.visual,
};
function returnStandard() {
    return standardUser;
}
function returnVisual() {
    return visualUser;
}
