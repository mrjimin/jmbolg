import { Store } from "../main";
class Navtabs extends Store {
    data() {
        return {
            count: 0
        };
    }
    incrementCount(e) {

        if (this.state.count == e) {
            this.state.count++;
        } else {
            this.state.count = e ? e : 0
        }

    }
}

export default new Navtabs();