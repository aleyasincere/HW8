import './App.css';
// import AboutPage from "./pages/AboutPage/AboutPage";
// import MainPage from "./pages/MainPage/MainPage";
// import TextProvider from "./Context/TextProvider";
// import ContactsPage from "./pages/ContactsPage/ContactsPage";
import PostPage from "./PostPage/PostPage";
function App() {



  return (
      <div className="App">
          {/*/!*<TextProvider>*!/*/}
          {/*/!*   <MainPage />*!/*/}
          {/*/!*    <h2>=================</h2>*!/*/}
          {/*/!*    <AboutPage />*!/*/}
          {/*/!*</TextProvider>*!/*/}
          {/*<ContactsPage />*/}
          <PostPage />
      </div>
  );
}

export default App;
