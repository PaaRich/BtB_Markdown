import styles from "./lib.module.css";

interface Item {
  name: string;
}
const Item = (props: Item) => {
  return (
    <div
      className={`${styles.item} d-flex align-items-center justify-content-between bg-secondary px-3 rounded-3 shadow-lg`}
    >
      <div>{props.name}</div>
      <ul>
        <li className="pe-5">Edit</li>
        <li>Delete</li>
      </ul>
    </div>
  );
};

export default Item;
