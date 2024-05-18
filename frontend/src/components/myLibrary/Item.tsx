import styles from "./lib.module.css";

interface Item {
  name: string;
}
const Item = (props: Item) => {
  return (
    <div className={styles.item}>
      <div>{props.name}</div>
      <ul>
        <li>Edit</li>
        <li>Delete</li>
      </ul>
    </div>
  );
};

export default Item;
