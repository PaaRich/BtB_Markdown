import Editor from "./Editor";
import { useState } from "react";
import styles from "./markdown.module.css";

const Markdown = () => {
  const [markdown, setMarkdown] = useState<string>("");
  return (
    <div className={`${styles.container} `}>
      <div className={`${styles.markdown_container}`}>
        <div className="p-2 bg-black text-white fw-medium fs-4">Markdown</div>
        {/* <input type="text" /> */}
        <textarea
          placeholder="Type your markdown"
          id={styles.myMarkdown}
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
      </div>
      <div className={styles.preview_container}>
        <div className="p-2 bg-black d-flex justify-content-between align-items-center">
          <h4 className="text-white">Preview</h4>
          <ul>
            <li>Save</li>
            <li>New</li>
            <li>Library</li>
            <li>Open</li>
          </ul>
        </div>
        <Editor markdown={markdown} />
      </div>
    </div>
  );
};

export default Markdown;
