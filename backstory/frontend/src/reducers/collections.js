const initialState = 
[
    {
      name: 'Mushrooms',
      images: [{
        imageSrc:
        "https://images.unsplash.com/photo-1589539148230-0a5b707cbd7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        caption: "Zoomin'",
        },
        {
        imageSrc:
        "https://images.unsplash.com/photo-1612404730960-5c71577fca11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        caption: "Level 1",
        },
        {
        imageSrc:
        "https://images.unsplash.com/photo-1599409636295-e3cf3538f212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        caption: "Zoomin' together",
        },
        {
        imageSrc:
        "https://images.unsplash.com/photo-1634159779963-4fafda643dac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
        caption: "Sad mushroom",
        },]
    },
  ]

export const collectionsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_COLLECTION":
        return [...state, action.payload]
      case "DELETE_COLLECTION":
        const index = state.findIndex(item => item._id === action.payload.collectionId);
        return [...state.slice(0, index), ...state.slice(index + 1)]
      case "UPDATE_COLLECTION":
        return state.map(item => {
          if (item._id === action.payload.collectionId) {
            return {
              ...item,
              photos: action.payload.photos, // Assume the payload includes the new set of photos
            };
          }
          return item;
        });
      default:
        return state
    }
  }
  