import { fireEvent, render, screen } from "@testing-library/react";
import Welcome from "./Components/Welcome";
import App from "./App"
import '@testing-library/jest-dom';
import SingleComment from "./Components/SingleComment";


test("Verifico se viene caricato correttamente il componente Welcome", () => {
    render(<Welcome />);
    const welcomeText = screen.getByText(/Benvenuto nella Web-App di libri epici./i)
    expect(welcomeText).toBeInTheDocument();
});

//Eseguo il click su "Torna ai Generi" perchè al test successivo serve che qui si torni indietro
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
    const backToGenres = screen.getByTestId("backToHome")
    fireEvent.click(backToGenres)
})

test("Verifico che il filtraggio dei libri nella NavBar funzioni come previsto", () => {
    render(<App />)
    const generi = screen.getAllByTestId("generi")
    fireEvent.click(generi[0])
    const search = screen.getByRole("input")
    fireEvent.change(search, {target: {value : "dungeons"}})
    const submit = screen.getByRole("submit")
    fireEvent.click(submit)
    const allBooks = screen.getAllByTestId("cardBooks")
    expect(allBooks).toHaveLength(2)
    const backToGenres = screen.getByTestId("backToGenres")
    fireEvent.click(backToGenres)
})

test("Verifico che cliccando su un libro, il suo bordo cambi colore", () => {
    render(<App />)
    const generi = screen.getAllByTestId("generi")
    fireEvent.click(generi[0])
    const allBooks = screen.getAllByTestId("cardBooks")
    const firstBook = allBooks[0]
    fireEvent.click(firstBook)
    expect(firstBook).toHaveStyle("border: danger")
    const backToGenres = screen.getByTestId("backToGenres")
    fireEvent.click(backToGenres)
})

test("Verifico che cliccando su un secondo libro dopo il primo, il bordo del primo ritorni normale", () => {
    render(<App />)
    const generi = screen.getAllByTestId("generi")
    fireEvent.click(generi[0])
    const allBooks = screen.getAllByTestId("cardBooks")
    const firstBook = allBooks[0]
    const secondBook = allBooks[1]
    fireEvent.click(secondBook)
    expect(firstBook).not.toHaveStyle("border: 2px solid red")
    const backToGenres = screen.getByTestId("backToGenres")
    fireEvent.click(backToGenres)
})

test("Verifica che, cliccando su un libro, le recensioni vengano correttamente caricate all'interno del DOM. ", async () => {
    render(<App />)
    const generi = screen.getAllByTestId("generi")
    fireEvent.click(generi[0])
    const details = screen.getAllByRole("button", {name:/details/i})
    fireEvent.click(details[0])
    const comments =  await screen.findAllByTestId("singleComment")
    expect(comments[0]).toBeInTheDocument()
})