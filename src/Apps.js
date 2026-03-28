import Main from "./components/navbar"
import Body from "./components/body"
import About from "./components/about"
import Footer from "./components/footer"
import Search from "./components/search";

function App() {
    return (
        <div>
            <Main></Main>
            <Search></Search>
            <Body></Body>
            <About></About>
            <Footer></Footer>
        </div>
    )
}

export default App