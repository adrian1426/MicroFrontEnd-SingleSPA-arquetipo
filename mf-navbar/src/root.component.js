import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Navbar from "./components/Navbar/Navbar";

export default function Root(props) {

  return (
    <ErrorBoundary componentName='mf-navbar' >
      <Navbar {...props} />
    </ErrorBoundary>
  );
}
