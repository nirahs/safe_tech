import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header/>
      <main className="py-2">
        <Container>
          <h1>Welcome to SafeTech!</h1>
        </Container>
      </main>
      <Footer/>
    </>
  )
}
