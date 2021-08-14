import React from "react";
import CollectionItem from "../collectionItem/CollectionItem";
import "./collectionPreview.scss";
import "./collectionPreview.css";
import { useRouteMatch } from "react-router-dom";
import { LinkStyle } from "./CollectionPreviewStyle";

const CollectionPreview = ({ items, title }) => {
  const path = useRouteMatch();

  return (
    <>
      <div className="collectionPreview">
        <h1 className="title">
          <LinkStyle to={`${path.path}/${title.toLowerCase()}`}>
            {title}
          </LinkStyle>
        </h1>
        <div className="preview">
          {items
            .filter((item, index) => index < 4)
            .map((item) => {
              return <CollectionItem key={item.id} item={item} />;
            })}
        </div>
      </div>
    </>
  );
};

export default CollectionPreview;
