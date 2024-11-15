import Header from "../components/Header.jsx";
import BodyPage from "../components/BodyPage.jsx";
import "./Page.css";

function Page() {
    return (
        < div class="MainPage">
            <Header id="headerStyle"></Header>
            <BodyPage id="bodyStyle"></BodyPage>
        </div >
    )
}

export default Page;