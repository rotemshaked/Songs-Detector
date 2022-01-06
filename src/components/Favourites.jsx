import { Link } from "react-router-dom";
import "../assets/styles.css";

const Favourites = ({ setFilteredFavoriteList, filteredFavoriteList }) => {
  const deleteSongFromFavoriteste = (e) => {
    let tempArrayOfSongs = localStorage.getItem("songs");
    let arrayOfSongs = JSON.parse(tempArrayOfSongs);
    return arrayOfSongs.filter((song) => console.log(song, "e" + e.target));
  };

  const CardFavorite = () => {
    let tempArrayOfSongs = localStorage.getItem("songs");
    let arrayOfSongs = JSON.parse(tempArrayOfSongs);
    return arrayOfSongs.map((song) => {
      // let songAlreadyExist = arrayOfSongs.find(song.id);
      // if (!songAlreadyExist) {
      return (
        <div className="favoriteSongsPage">
          <div className="favoriteSong">
            <div className="favoriteArtistName" key={song.id}>
              {song.artistName} -
              <span className="favoritesongTitle">{song.songTitle}</span>
            </div>
            <img
              className="favoritesongTitleCoverPicture"
              src={song.artistPicture}
              alt="Album cover"
            />
            <div className="favoriteMusicPlayer">{/* <Music /> */}</div>
            <Link className="favoriteGetLyricsLink" to="/Lyrics">
              Get Lyrics
            </Link>
            {/* <button
              className="favoriteGetLyricsLink"
              onClick={deleteSongFromFavoriteste}
            >
              Delete
            </button> */}
          </div>
        </div>
      );
    });
  };

  return <div className="favoritesCard">{CardFavorite()}</div>;
};
export default Favourites;
