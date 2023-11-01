import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

const Layout = ({ children }) => {
  return (
    <div className="md:px-48 max-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout