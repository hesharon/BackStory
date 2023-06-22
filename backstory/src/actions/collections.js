export const createCollection = (name, photos) => ({
    type: "CREATE_COLLECTION",
    payload: {name, photos}
})

export const deleteCollection = collectionId => ({
    type: "DELETE_COLLECTION",
    payload: collectionId
})

export const addToCollection = photo => ({
    type: "ADD_TO_COLLECTION",
    payload: photo
})