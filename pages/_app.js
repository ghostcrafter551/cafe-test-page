import "../styles/globals.css";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <div className="view">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
