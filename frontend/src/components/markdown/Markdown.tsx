import Editor from "./Editor";
import { useState } from "react";
import styles from "./markdown.module.css";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import Title from "../title/Title";
import Nav from "../../nav/Nav";
import Del from "./Del";
interface BgToggle {
  toggleBg: boolean;
  setToggleBg: Function;
}
const Markdown = (props: BgToggle) => {
  //markdown input
  const [markdown, setMarkdown] = useState<string>("");
  //toggle nav component
  const [isOpen, setIsOpen] = useState<boolean>(false);
  //toggle preview component
  const [toggle, setToggle] = useState<boolean>(false);
  //toggle delete component
  const [toggleDel, setToggleDel] = useState<boolean>(false);

  return (
    <section>
      <Nav
        toggleBg={props.toggleBg}
        setToggleBg={props.setToggleBg}
        open={isOpen}
        setOpen={setIsOpen}
      />

      {/* HOMEPAGE */}
      <div
        className={`${styles.homePage_container} ${toggleDel && styles.dim} ${
          isOpen && styles.dim
        }`}
      >
        {/* TITLE BAR */}
        <Title
          toggleDel={toggleDel}
          setToggleDel={setToggleDel}
          setOpen={setIsOpen}
          setToggle={setToggle}
          open={isOpen}
          markdown={markdown}
        />

        {/* MARKDOWN & PREVIEW */}
        <div className={styles.container}>
          {/* MARKDOWN */}
          <div
            className={`${styles.markdown_container} ${
              toggle && styles.markdown_toggle
            }`}
          >
            <div
              className={`${styles.secHeader}  ${
                props.toggleBg ? styles.headOff : styles.headOn
              } d-flex align-items-center justify-content-between p-3 fw-medium`}
            >
              <h6 className="p-0 m-0">MARKDOWN</h6>
              <IoEyeOutline
                onClick={() => setToggle(!toggle)}
                className={styles.eye}
              />
            </div>
            <textarea
              autoFocus
              placeholder="Type your markdown"
              className={`${props.toggleBg ? styles.off : styles.on}`}
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
            />
          </div>

          {/* PREVIEW */}
          <div
            className={`${toggle && styles.preview_toggle} ${
              styles.preview_container
            }`}
          >
            <div
              className={`${styles.secHeader} ${
                props.toggleBg ? styles.headOff : styles.headOn
              } d-flex align-items-center justify-content-between p-3 fw-medium`}
            >
              <h6 className="m-0 p-0">PREVIEW</h6>
              {toggle ? (
                <FaRegEyeSlash
                  onClick={() => setToggle(!toggle)}
                  className={styles.eye}
                />
              ) : (
                <IoEyeOutline
                  onClick={() => setToggle(!toggle)}
                  className={styles.eye}
                />
              )}
            </div>

            <Editor
              toggleBg={props.toggleBg}
              markdown={markdown}
              toggle={toggle}
            />
          </div>
        </div>
      </div>

      {/* DELETE */}
      <Del
        toggleBg={props.toggleBg}
        toggleDel={toggleDel}
        setToggleDel={setToggleDel}
      />
    </section>
  );
};

export default Markdown;
