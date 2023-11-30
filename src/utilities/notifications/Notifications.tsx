import "./notifications.scss";
import Success from "./components/success/Success";
import ErrorComponent from "./components/error/Error";
import { Notify } from "../../models/types";
import { motion } from "framer-motion";

type Props = {
  notify: Notify;
};

const Notification: React.FC<Props> = ({ notify }) => {
  const { status, menssage, success } = notify;
  return (
    status && (
      <motion.div
        className="notification"
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 0.2 }}>
        {status && (
          <section className="container-notification">
            {success ? (
              <Success menssage={menssage} />
            ) : (
              <ErrorComponent menssage={menssage} />
            )}
          </section>
        )}
      </motion.div>
    )
  );
};

export default Notification;
