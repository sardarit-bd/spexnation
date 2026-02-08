import Footer from "../../components/Footer";
import Header from "../../components/Header";

const SiteLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default SiteLayout;