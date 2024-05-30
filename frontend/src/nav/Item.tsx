import { CiFileOn } from "react-icons/ci";
import styles from "./nav.module.css";

interface Item {
  date: string;
  name: string;
}
const Item = (props: Item) => {
  return (
    <div className={`${styles.item} d-flex align-items-center my-3 px-2 py-1`}>
      <CiFileOn size={23} />
      <div className="ms-2">
        <p className="p-0 m-0">{props.date}</p>
        <p className="p-0 m-0">{props.name}</p>
      </div>
    </div>
  );
};

export default Item;
