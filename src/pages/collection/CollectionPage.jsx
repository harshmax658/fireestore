import React from "react";
import "./collectionPage.scss";
import "./collectionPage.css";
import CollectionItem from "../../components/collectionItem/CollectionItem";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../../components/spinner/Spinner";
import { Center } from "../../components/CenterStyle";

const CollectionPage = () => {
  const { categoryName } = useParams();

  const shoppingData = useSelector((state) => state.shopReducer);
  const { collection, isLoading } = shoppingData;
  let callCollection;
  if (collection) {
    callCollection = collection[categoryName];
  }

  return (
    <>
      {isLoading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <div className="collection_page">
          <div className="title">{callCollection.title}</div>
          <div className="items">
            {callCollection.items.map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CollectionPage;
