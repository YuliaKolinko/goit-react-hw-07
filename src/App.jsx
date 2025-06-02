import { useEffect } from "react";
import css from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/ContactsOps";
import Error from "./components/Error/Error";
import Loader from "./components/Loader/Loader";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .then(() => {
        console.log("Contacts fetched successfully");
      })
      .catch((err) => {
        console.error("Failed to fetch contacts:", err);
      });
  }, [dispatch]);

  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        {loading && <Loader />}
        {error && <Error>{error}</Error>}
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}
export default App;
