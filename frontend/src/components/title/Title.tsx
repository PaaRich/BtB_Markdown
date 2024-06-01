import styles from "./title.module.css";
import { RiMenuFill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiFileOn } from "react-icons/ci";
import { IoSaveOutline } from "react-icons/io5";
import { useState } from "react";

interface SetOpen {
  setToggle: Function;
  setOpen: Function;
  open: boolean;
  toggleDel: boolean;
  setToggleDel: Function;
  markdown: string;
}
const Title = (props: SetOpen) => {
  const [name, setName] = useState<string>("Welcome.md");
  const localOpen = props.open;
  const positive = props.markdown.length > 2;
  return (
    <div
      className={`${styles.container} d-flex align-items-center justify-content-between pe-3 text-white`}
    >
      <div className="d-flex align-items-center">
        <div
          className={styles.menuBtn}
          onClick={() => {
            props.setOpen(!localOpen);
            props.setToggle(false);
          }}
        >
          {props.open ? (
            <MdOutlineClose className="mx-2 my-3" size={26} />
          ) : (
            <RiMenuFill className="mx-2 my-3" size={26} />
          )}
        </div>

        <h6 className="mx-3 my-0 pe-3 d-none d-sm-block py-2">MARKDOWN</h6>
        <div className={`${styles.title} d-flex align-items-center`}>
          <div>
            <CiFileOn size={24} className="me-2 ms-2 ms-sm-0" />
          </div>
          <label>
            <span className="d-none d-md-block">Document name</span>
            <input
              maxLength={20}
              minLength={2}
              type="text"
              pattern="[a-zA-Z]*"
              className="text-white mt-0"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
      </div>

      <div className="d-flex align-items-center">
        <div
          className={`${styles.dltBtn} rounded-circle`}
          onClick={() => props.setToggleDel(true)}
        >
          <RiDeleteBin6Line className="m-0 m-md-2" />
        </div>
        <button
          className={`${
            positive && styles.positive
          }  d-flex align-items-center px-2 py-1 ms-3 border-0 text-white fw-medium rounded-1`}
        >
          <IoSaveOutline size={22} className="me-0 me-md-2" />
          <span className="d-none d-md-block">Save changes</span>
        </button>
      </div>
    </div>
  );
};

export default Title;
