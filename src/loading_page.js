import "./style.css"
import { Content } from "./components/Content"
import { Sidebar } from "./components/Sidebar"
import { Navbar } from "./components/Navbar"
import { Container } from "./components/Container"
import { Modal } from "./components/Modal"
import { Buttons } from "./components/Buttons"

const loading_page = () => {
    Navbar()
    Content()
    Sidebar()
    Buttons()
    Container()
    Modal()

    const tab = document.getElementById("current-tab")
    tab.innerText = "Home"
}

export { loading_page }
