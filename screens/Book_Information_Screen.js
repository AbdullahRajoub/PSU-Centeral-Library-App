import { StyleSheet, ScrollView } from "react-native";

import { BOOKS } from "../data/dummy-data";
import BookDetails from "../components/Book_Details";
import BookSummary from "../components/Book_Summary";
import { useRoute } from "@react-navigation/native";
import formateDate from "../components/Utlity/Date";

function BookInformationScreen({ route, navigation }) {
  //  Getting isbn of the book that the user
  // has clicked on
  //  This iformation is sent from bookCard where each
  // BookCard containts infomation about the book
  const Route = useRoute();
  //getting the book isbn using the passed route params
  //const isbn = route.params.isbn;
  const isbn = Route.params.isbn; //DUMMY ISBN FOR TESTING (using the dummy data)

  //using the isbn to find the selected book object
  const selectedBook = BOOKS.find((book) => book.isbn === isbn);

  const formatedDate = formateDate(selectedBook.date);
  const bookImage = require("../assets/icon.png"); //dummy image to test

  /*
    This commented section might be used later to implement the favorite books feature
    Note: Some variable / function namings might be changed
    This assumes we use the Context API for App-wide State management

    const favoriteBookCtx = useContext(FavoritesContext);
    const bookIsFavorite = favoriteBookCtx.isbnList.includes(isbn);

    //function for adding / removing the book to / from favorites
    function changeFavoriteStatus() {
        if (bookIsFavorite) {
            favoriteBookCtx.removeFavorite(isbn);
        } else {
            favoriteBookCtx.addFavorite(isbn);
        }
    }
  */

  return (
    //Scrollview for the entire screen
    <ScrollView style={styles.rootContainer}>
      <BookDetails
        isbn={isbn}
        author={selectedBook.author}
        date={selectedBook.date}
        genre={selectedBook.genre}
        bookImage={bookImage}
      />
      {/* Some icons bar goes here (borrow / favorite / etc...) */}
      <BookSummary>{selectedBook.summary}</BookSummary>
    </ScrollView>
  );
}

export default BookInformationScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 16,
    margin: 16,
  },
});
