import ReactMarkdown from "react-markdown";
import styles from "./markdown.module.css";
interface Editor {
  markdown: string;
}
const Editor = (props: Editor) => {
  return (
    <ReactMarkdown className={styles.editor}>{props.markdown}</ReactMarkdown>
  );
};

export default Editor;
