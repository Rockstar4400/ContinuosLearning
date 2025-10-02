const options = { 
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

const dateReducer = (state = 
    new Date().toLocaleDateString(undefined, options), action) =>{
    return state;
}

export default dateReducer;