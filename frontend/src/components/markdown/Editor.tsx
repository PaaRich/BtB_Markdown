import ReactMarkdown from "react-markdown";
import styles from "./markdown.module.css";
import remarkGfm from "remark-gfm";

interface Editor {
  markdown: string;
  theToggle: boolean | string;
  toggleBg: boolean;
}
const Editor = (props: Editor) => {
  return (
    <div
      className={`${props.toggleBg ? styles.off : styles.on} ${styles.editor}`}
    >
      <div className={props.theToggle ? styles.centerPreview : ""}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {props.markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Editor;
