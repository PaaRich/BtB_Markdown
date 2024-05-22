import Editor from "./Editor";
import { useState } from "react";
import styles from "./markdown.module.css";
import { IoEyeOutline } from "react-icons/io5";

const Markdown = () => {
  const [markdown, setMarkdown] = useState<string>("");
  return (
    <section className={`${styles.container} `}>
      <div className={`${styles.markdown_container}`}>
        <h6 className={`${styles.letter_space} p-3 m-0 text-white fw-medium`}>
          MARKDOWN
        </h6>
        {/* <input type="text" /> */}
        <textarea
          placeholder="Type your markdown"
          id={styles.myMarkdown}
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
      </div>
      <div className={styles.preview_container}>
        <div
          className={`${styles.letter_space} d-flex align-items-center justify-content-between p-3 text-white fw-medium`}
        >
          <h6 className="m-0 p-0">PREVIEW</h6>

          <IoEyeOutline className={styles.eye} />
        </div>

        <Editor markdown={markdown} />
      </div>
    </section>
  );
};

export default Markdown;
