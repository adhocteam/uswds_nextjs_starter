import Home from "./index";

// It is important to import the USWDS stylesheet in _app.js because
// it's global https://nextjs.org/docs/messages/css-global
import "../assets/stylesheets/styles.css";

export default function App() {
  return <Home></Home>;
}
