export const addPhoto = photo => ({
    type: "ADD_PHOTO",
    payload: photo
})

export const deletePhoto = photoId => ({
    type: "REMOVE_PHOTO",
    payload: photoId
})

export const editPhoto = photoId => ({
    type: "EDIT_PHOTO",
    payload: photoId
})