

function get(id){
    return new Promise((resolve, reject)=>{
        if(id){
            if(chat = this.findById(id)){
                resolve(chat);
            }else reject({code: 404, message: `instance not found by id: ${id}`});
        }else reject({code: 406, message: "instance id null value, not accepted"})
    })
}

function createInstance(){
    //CHECK IF YOU CAN VALIDATE WHEN CREATING THE INSTANCE
}