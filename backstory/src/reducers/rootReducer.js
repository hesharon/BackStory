const initialState = {
    photos: [{
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
    },
    {
    imageSrc:
    "https://images.unsplash.com/photo-1618232731737-e1cd67c80bc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    caption: "Mushroom",
    },
    {
    imageSrc:
    "https://images.unsplash.com/photo-1603539007496-0bfa35834541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=770&q=80",
    caption: "Also mushroom",
    }
    ],
    collections: [
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
    }
    
    
    const rootReducer = (state = initialState, action) => {
    return state;
    }
    
    
    export default rootReducer;