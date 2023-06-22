export const addPhoto = photo => ({
    type: "ADD_PHOTO",
    payload: photo
})

export const deletePhoto = photoId => ({
    type: "DELETE_PHOTO",
    payload: photoId
})