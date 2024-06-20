import { fireEvent, render, screen } from "@testing-library/react";
import Welcome from "./Components/Welcome";
import App from "./App"
import '@testing-library/jest-dom';


test("Verifico se viene caricato correttamente il componente Welcome", () => {
    render(<Welcome />);
    const welcomeText = screen.getByText(/Benvenuto nella Web-App di libri epici./i)
    expect(welcomeText).toBeInTheDocument();
});

test("Verifico che vengono renderizzare tante bootstrap cards quanti sono i libri nel file json", () => {
    render(<App />);
    const generi = screen.getAllByTestId("generi")
    fireEvent.click(generi[0])
    const allBooks = screen.getAllByTestId("cardBooks")
    expect(allBooks).toHaveLength(12)
})