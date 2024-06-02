import { showErrorMessage } from "./Console";

class App {

    public run() {

    }
}

try {
    const app = new App();
    app.run();
} catch (err) {
    if (err instanceof Error) {
        showErrorMessage(err.message);
    } else {
        showErrorMessage('General error');
    }
}

export default App;