import { appendFile } from "fs";

class App {

    public run() {

    }
}

try {
    const app = new App();
    app.run();
} catch (err) {
    if (err instanceof Error) {
    }
}

export default App;