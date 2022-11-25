const knex=require("../connection");

function getAllData(){
return knex('userdata').select("*")
};


function addUser(userdata) {
    return knex('userdata')
    .insert(userdata)
    .returning('*');
  }



  function updateUser(id, user) {
    return knex('userdata')
    .update(user)
    .where({ id: parseInt(id) })
    .returning('*');
  }


  function deleteUser(id) {
    return knex('userdata')
    .del()
    .where({ id: parseInt(id) })
    .returning('*');
  }

module.exports={getAllData,addUser,updateUser,deleteUser};


