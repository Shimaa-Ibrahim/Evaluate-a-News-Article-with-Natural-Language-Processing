function checkInput(input, type){
    let obj = {};
    if(!input){
        obj.check = false,
        obj.msg = `${type} required!`
        return obj
    }

    const regex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    if(type == "url" && !regex.test(input)){
        obj.check = false,
        obj.msg = 'Invalid URL!'
        return obj;
    }
    
    obj.check = true;
    return obj;
    
}

export {
    checkInput
}