export const addCollection = (collection) => ({
  type: "ADD_COLLECTION",
  payload: collection,
});

export const updateCollection = (collection) => ({
  type: "UPDATE_COLLECTION",
  payload: collection,
});

export const deleteCollection = (collectionId) => ({
  type: "DELETE_COLLECTION",
  payload: collectionId,
});
