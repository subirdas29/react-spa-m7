const getLS = () =>{
const getStorage = localStorage.getItem('course')
    if(getStorage){
        return JSON.parse(getStorage)
    }
}
