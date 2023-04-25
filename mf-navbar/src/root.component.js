import { ErrorBoundary } from "./components/ErrorBoundary";
import Navbar from "./components/Navbar/Navbar";

export default function Root(props) {

  return (
    <ErrorBoundary componentName={props.name} >
      <Navbar {...props} />
    </ErrorBoundary>
  );
}
