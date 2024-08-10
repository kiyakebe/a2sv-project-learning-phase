import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

const UnBookmark = () => {
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

export default UnBookmark;
