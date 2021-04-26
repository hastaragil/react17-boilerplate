import {observable, computed} from "mobx";
import {UI} from "./ui";

export class Store {
    @observable
    accessToken = '';

    @observable
    refreshToken = '';

    ui = new UI();

    @computed
    get isLoggedIn() {
        return !!this.refreshToken;
    }

    setInitialToken(accessToken, refreshToken) {
        this.setToken(accessToken, refreshToken);
    }

    setToken(accessToken, refreshToken) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
    }
}
