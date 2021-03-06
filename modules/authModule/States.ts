import {LoginCtrl} from "./login/Ctrl";

export const States: iRegisterMeta<ng.ui.IState> = {
    name:"login",
    config: {
        url: "/login?from",
        template: require<string>("./login/Template.html"),
        controller: LoginCtrl,
        controllerAs:"vm"
    }
};