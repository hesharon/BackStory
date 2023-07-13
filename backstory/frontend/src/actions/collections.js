export const createCollection = collection => ({
    type: "CREATE_COLLECTION",
    payload: collection
})

export const deleteCollection = collectionId => ({
    type: "DELETE_COLLECTION",
    payload: collectionId
})

export const addToCollection = (photo , collectionId) => ({
    type: "ADD_TO_COLLECTION",
    payload: {collectionId, photo}
})