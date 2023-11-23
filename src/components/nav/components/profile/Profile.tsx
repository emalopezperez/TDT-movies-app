import { useState } from "react"
import "./profile.scss"
import ModaleProfile from "./components/modalProfile/ModaleProfile"

const Profile = () => {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <div className="container-profile">
      <button onClick={ toggleModal } className="button-profile">
        <img
          className=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </button>

      <div className={ `container-modal ${openModal ? "visible" : ""}` }>
        <ModaleProfile />
      </div>

    </div>
  )
}

export default Profile