import {action, observable} from "mobx";

export class UI {
    @observable
    mediaQuery = {
        isMobile: false,
        isDesktop: true
    };

    @action
    setMediaQuery(data) {
        if (this.mediaQuery.isDesktop !== data.isDesktop || this.mediaQuery.isMobile !== data.isMobile) {
            this.mediaQuery = data;
        }
    };
}
