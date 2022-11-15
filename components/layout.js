import Anchor from "../components/Anchor";

export default function Layout({children}) {
    return (
        <>
        <header>
            <nav>
                <ul>
                    <li><Anchor href="/">Home</Anchor></li>
                    <li><Anchor href="/dogs/henry">Henry</Anchor></li>
                </ul>
            </nav>
        </header>

        <main>{children}</main>

        <footer>Footer Content</footer>
        </>
    )
}