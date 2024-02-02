

function get(id){
    return new Promise((resolve, reject)=>{
        if(id){
            if(chat = this.findById(id)){
                resolve(chat);
            }else reject({code: 404, message: `instance not found by id: ${id}`});
        }else resolve(this.find())
    })
}