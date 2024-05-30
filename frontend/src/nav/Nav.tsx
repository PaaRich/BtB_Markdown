import { FiPlus } from "react-icons/fi";
import styles from "./nav.module.css";
import Item from "./Item";
import { FaRegMoon } from "react-icons/fa6";
import { TiWeatherSunny } from "react-icons/ti";
import { MdOutlineClose } from "react-icons/md";

interface Open {
  open: boolean;
  toggleBg: boolean;
  setToggleBg: Function;
  setOpen: Function;
}
const Nav = (props: Open) => {
  //const [toggle, setToggle] = useState<boolean>(true);
  const isOpen: boolean = props.open;
  return (
    <div
      className={`${styles.container} ${
        props.open ? styles.open : styles.close
      } `}
    >
      <div>
        <div>
          <div>
            <p className={`${styles.myDoc} py-3 m-0`}>MY DOCUMENTS</p>
          </div>
          <button className="rounded-1 px-2 py-1 text-white">
            <span className="d-flex align-items-center justify-content-center">
              <FiPlus />
              New document
            </span>
          </button>
          <Item date="01 April 2022" name="welcome.md" />
          <Item date="05 July 2022" name="README.md" />
          <Item date="09 May 2022" name="description.md" />
        </div>
        <div className="mb-2 d-flex align-items-center">
          <FaRegMoon className={props.toggleBg ? styles.on : styles.off} />
          <div
            className={styles.parent}
            onClick={() => props.setToggleBg(() => !props.toggleBg)}
          >
            <div
              className={props.toggleBg ? styles.child : styles.child_toggle}
            ></div>
          </div>
          <TiWeatherSunny className={props.toggleBg ? styles.off : styles.on} />
        </div>
        <div
          className={`${styles.menu} ${
            isOpen ? styles.d_block : styles.d_none
          }`}
          onClick={() => props.setOpen(!isOpen)}
        >
          <MdOutlineClose className="mx-2 my-3" size={26} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
