import icon from "./assets/icon.jpeg";
import "./App.css";
import { useState } from "react";

import AddButton from "./Components/AddBtn";
import Linklist from "./Components/LinkList";
import SearchBar from "./Components/SearchBar";
// import DeleteAll from "./Components/DeleteAll";

export default function App() {
  //  For List
  const storedLinks = localStorage.getItem("links");
  const parsedLinks =
    storedLinks === "" || storedLinks === null ? [] : JSON.parse(storedLinks);

  const [links, setLinks] = useState(
    Array.isArray(parsedLinks) ? parsedLinks : []
  );

  //  For add button
  const onAddButtonAddLink = (name, url, tags) => {
    const newLinks = links.concat([
      {
        name,
        url,
        tags,
      },
    ]);
    setLinks(newLinks);
    localStorage.setItem("links", JSON.stringify(newLinks));
  };

  //  For delete button
  const onDeleteOne = (i) => {
    const deleteLinks = [...links];
    deleteLinks.splice(i, 1);
    setLinks(deleteLinks);
    localStorage.setItem("links", JSON.stringify(deleteLinks));
  };

  //for search
  const [search, setSearch] = useState("");
  const onSearchBarChange = (search) => {
    setSearch(search);
  };

  const filteredLinks = (search) => {
    const lowerSearch = search.toLowerCase();
    return links.filter((link) => {
      return (
        link.name.toLowerCase().indexOf(lowerSearch) > -1 ||
        link.url.toLowerCase().indexOf(lowerSearch) > -1 ||
        link.tags
          .map((tag) => {
            return tag.name.toLowerCase().indexOf(lowerSearch) > -1;
          })
          .indexOf(true) > -1
      );
    });
  };

  return (
    <>
      <div className="appcontainer">
        <div className="Sidebar">
          <img className="icon" src={icon} alt={icon} />
          <h4 className="name">Coding Donald Pepe</h4>
          <p>{links.length} shared links.</p>
          <AddButton onAddLinkProps={onAddButtonAddLink} />
        </div>
        <div id="content_right">
          <div id="header">
            <SearchBar onSearchChangeProp={onSearchBarChange} />
          </div>
          <div id="main">
            <Linklist
              links={filteredLinks(search)}
              deleteLink={(i) => onDeleteOne(i)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
