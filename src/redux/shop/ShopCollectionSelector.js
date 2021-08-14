const ShopCollectionSelector = (collection) => {
  // console.log(collection);
  return collection
    ? Object.keys(collection).map((key) => collection[key])
    : null;
};
export default ShopCollectionSelector;
