import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AppStore } from "../../../../redux/store";

import "./profile.scss";
import ModaleProfile from "./components/modalProfile/ModaleProfile";

const Profile = () => {
  const [openModal, setOpenModal] = useState(true);
  const [notify, setNotify] = useState(false);

  const favoritesQuantity = useSelector(
    (store: AppStore) => store.favorites.favoritesQuantity
  );

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    if (favoritesQuantity) {
      setNotify(true);
    } else {
      setNotify(false);
    }
  }, [favoritesQuantity]);

  return (
    <div className={notify ? "notify" : "container-button"}>
      <button onClick={toggleModal} className="button-profile">
        <img
          className=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </button>

      <div className={`container-modal ${openModal ? "visible" : ""}`}>
        <ModaleProfile setOpenModal={setOpenModal} />
      </div>
    </div>
  );
};

export default Profile;
