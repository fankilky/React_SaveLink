export default function LinkList(props) {
  return (
    <>
      <div className="row link_card_container">
        {props.links && props.links.length > 0
          ? props.links.map((link, i) => (
              <>
                <div key={i} className="link_card col-lg-3">
                  <button
                    className="deletebtn"
                    onClick={() => {
                      props.deleteLink(i);
                    }}
                  >
                    <i class="fas fa-minus-circle"></i>
                  </button>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {i + 1}. {link.name}
                  </a>
                  <p>{link.url}</p>
                  {link.tags && link.tags.length > 0
                    ? link.tags.map((tag, i) => (
                        <>
                          <span key={i}> # {tag.name} </span>
                          <br />
                        </>
                      ))
                    : "No tags present"}
                </div>
              </>
            ))
          : "No links present"}
      </div>
    </>
  );
}
