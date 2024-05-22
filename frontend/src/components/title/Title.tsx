import { useState } from "react";
import styles from "./title.module.css";
import { RiMenuFill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiFileOn } from "react-icons/ci";
import { IoSaveOutline } from "react-icons/io5";

const Title = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div
      className={`${styles.container} d-flex align-items-center justify-content-between pe-3 text-white`}
    >
      <div className="d-flex align-items-center">
        <div className={styles.menuBtn} onClick={() => setOpen(!open)}>
          {open ? (
            <MdOutlineClose className="mx-2 my-3" size={26} />
          ) : (
            <RiMenuFill className="mx-2 my-3" size={26} />
          )}
        </div>

        <h6 className="mx-3 my-0 pe-3 d-none d-sm-block">MARKDOWN</h6>
        <div className="d-flex align-items-center">
          <CiFileOn size={20} className="me-2 ms-2 ms-sm-0" />
          Title
        </div>
      </div>

      <div className="d-flex align-items-center">
        <div className={`${styles.dltBtn} rounded-circle`}>
          <RiDeleteBin6Line className="m-2" />
        </div>
        <button className=" d-flex align-items-center px-2 py-1 ms-3 border-0 text-white fw-medium rounded-1">
          <IoSaveOutline size={22} className="me-2" />
          Save changes
        </button>
      </div>
    </div>
  );
};

export default Title;
