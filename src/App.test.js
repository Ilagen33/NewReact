import { fireEvent, render, screen } from "@testing-library/react";
import Welcome from "./Components/Welcome";
import App from "./App"
import SingleBook from "./Components/SingleBook";
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
    const backToGenres = screen.getByTestId("backToGenres")
    fireEvent.click(backToGenres)
})

test("Verifico che venga renderizzato correttamente il componente CommentArea",  async ()=> {
    render(<App />);
    const generi = screen.getAllByTestId("generi")
    fireEvent.click(generi[0])
    const details = screen.getAllByRole("button", {name:/details/i})
    fireEvent.click(details[0])
    const commentList = screen.getByTestId("commentList")
    expect(commentList).toBeInTheDocument();
})