import { Container } from 'react-bootstrap';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed-bottom py-2">
      <Container>
        <p className="my-0 text-center">SafeTech &copy; {currentYear}</p>
      </Container>
    </footer>
  );
}
