import styles from "./markdown.module.css";
interface Del {
  toggleBg: boolean;
  setToggleDel: Function;
  toggleDel: boolean;
}
const Del = (props: Del) => {

  return (
    <div
      className={`${styles.del_container} ${
        props.toggleBg ? "bg-dark text-white" : "bg-white text-dark"
      } ${props.toggleDel && styles.displayDel} shadow`}
    >
      <div className="p-4">
        <p className="fw-bold fs-6">Delete this document?</p>
        <p>
          Are you sure you want to delete the <br /> Welcome.md document and
          it's content? <br /> This action cannot be reversed
        </p>
        <button
          className="rounded-1 w-100 text-white py-1"
          type="submit"
          onClick={() => props.setToggleDel(false)}
        >
          Confirm & Delete
        </button>
      </div>
    </div>
  );
};

export default Del;
