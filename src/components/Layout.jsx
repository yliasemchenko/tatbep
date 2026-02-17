import Header from './Header'
import Footer from './Footer'
import '../styles/main.css'

function Layout({ children }) {
  return (
    <div className="app">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
