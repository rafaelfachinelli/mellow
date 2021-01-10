import { Container } from './styles';

export default function Button(props) {
  return (
    <Container>
      <button>{props.children}</button>
    </Container>
  );
}