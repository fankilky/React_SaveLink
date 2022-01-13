import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function AddButton(props) {
  // Bootstrap - Modal
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [name, setName] = useState("");
  const [url, setURL] = useState("");
  const [tag, setTag] = useState([]);

  const addLink = () => {
    props.onAddLinkProps(name, url, tag);
    // reset search input
    setShow(false);
    setName("");
    setURL("");
    setTag([]);
  };

  const onTagChange = (i, e) => {
    const newTags = tag.slice();
    newTags[i] = {
      name: e.currentTarget.value,
    };
    setTag(newTags);
  };

  return (
    <>
      <Button onClick={handleShow} className="btn addbtn">
        <i className="fas fa-plus"></i>Add Link
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Add links</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="inputBox">
            <label>name: </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            ></input>
            <br />
          </div>
          <div className="inputBox">
            <label>URL: </label>
            <input
              type="text"
              name="url"
              value={url}
              onChange={(e) => setURL(e.currentTarget.value)}
            ></input>
            <br />
          </div>
          <div className="inputBox">
            <label>Tags: </label>
            {tag && tag.length > 0
              ? tag.map((tag, i) => {
                  return (
                    <input
                      key={i}
                      type="text"
                      value={tag.name}
                      onChange={(e) => onTagChange(i, e)}
                    />
                  );
                })
              : "No Tags"}
            <br />
            <button
              className="addTagbtn"
              onClick={() => setTag(tag.concat([{ name: "" }]))}
            >
              <i class="fas fa-plus-circle"></i>
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="discardbtn" onClick={handleClose}>
            Discard
          </button>
          <button className="confirmbtn" onClick={addLink}>
            Confirm
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
