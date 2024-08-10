import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
const Bookmark = () => {
  return (
    <button
      onClick={() => {
        console.log("object");
      }}
    >
      <FontAwesomeIcon icon={faBookmark} />
    </button>
  );
};

export default Bookmark;
