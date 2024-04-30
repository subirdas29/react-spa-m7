const getLs = () =>{
    const getStorage = localStorage.getItem('course')
    if(getStorage){
        return JSON.parse(getStorage)
    }
    return [];
}

const saveLS = addCart =>{
    const saveStringify = JSON.stringify(addCart)
    localStorage.setItem('course', saveStringify)
}

const addLS = id =>{
    const addCart = getLs()
    addCart.push(id)
    saveLS(addCart)
}

const removeLs = id =>{
    const getLsid = getLs()
    const remaining = getLsid.filter(idx => idx !== id)
    saveLS(remaining)
}


export {addLS , getLs,removeLs}