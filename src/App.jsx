import Nav from "./components/Nav"
import Wrapper from "./components/panels/Wrapper";

function App({ sections }) {
  return (
    <>
      <Nav />
      <Wrapper {...{ sections }} />
    </>
  )
}

export default App
