import "../../styles.css";
import {
  Bold,
  Globe,
  Italic,
  Code,
  Hash,
  List,
  Search,
  Tag,
  Plus,
} from "lucide-react";

export default function Note() {
  return (
    /* Markdown support */

    <div className="form-contianer">
      <form style={{ marginTop: "0.75rem" }}>
        <div className="input-container">
          <Search className="input-icon" />
          <input
            id="search-bar"
            type="text"
            placeholder="Search notes and tags..."
            className="input-field"
          />
        </div>
        {/* Formatting Toolbar */}
        <div className="toolbar">
          <button
            type="button"
            // onClick={() => insertFormatting('bold')}
            className="icon"
            title="Bold (Ctrl+B)"
          >
            <Bold style={{ widht: "1rem", height: "1rem" }} />
          </button>
          <button
            type="button"
            // onClick={() => insertFormatting('italic')}
            className="icon"
            title="Italic (Ctrl+I)"
          >
            <Italic style={{ widht: "1rem", height: "1rem" }} />
          </button>
          <button
            type="button"
            // onClick={() => insertFormatting('code')}
            className="icon"
            title="Code Block"
          >
            <Code style={{ widht: "1rem", height: "1rem" }} />
          </button>
          <button
            type="button"
            // onClick={() => insertFormatting('list')}
            className="icon"
            title="List"
          >
            <List style={{ widht: "1rem", height: "1rem" }} />
          </button>
          <button
            type="button"
            // onClick={() => insertFormatting("heading")}
            className="icon"
            title="Heading"
          >
            <Hash style={{ widht: "1rem", height: "1rem" }} />
          </button>
        </div>
        <textarea
          id="note-content"
          // value={content}
          // onChange={(e) => setContent(e.target.value)}
          placeholder="Write your note... (Markdown supported)"
          className="textarea"
          rows={6}
        />
        {/* Notes Tab */}

        <div className="tag">
          <Tag style={{ width: "1rem", height: "1rem" }} />
          <input
            id="search-bar"
            type="text"
            placeholder="Add tags (Press Enter)"
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: 13,
              height: 17,
              padding: 8,
              width: 400,
              font: 20,
            }}
          />
        </div>
        <span style={{ display: "flex", gap: "11em" }}>
          <button className="current_page">
            <Globe style={{ width: "1.3rem", height: "1.3rem" }} />
            Current Page
          </button>
          <button className="add_note">
            <Plus style={{ width: "1.3rem", height: "1.3rem" }} />
            Add Note
          </button>
        </span>
      </form>
    </div>
  );
}
