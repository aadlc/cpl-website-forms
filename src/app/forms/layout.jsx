import Container from '@mui/material/Container'

export default function FormLayout({
  children, // will be a page or nested layout
}) {
  return (
    <Container maxWidth='sm' component='main'>
      {children}
    </Container>
  )
}