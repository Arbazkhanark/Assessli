import { useState } from "react"
import ContactLists from "./components/ContactLists"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Nav from "./components/Nav"

const App = () => {
  const [contacts, setContacts] = useState([]);
  return (
    <div>
    <Nav/>
    <Hero setContacts={setContacts} />
      <ContactLists contacts={contacts} setContacts={setContacts} />
      <Footer/>
    </div>
  )
}

export default App