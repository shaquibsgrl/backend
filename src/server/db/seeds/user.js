/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('userdata').del()
  await knex('userdata').insert([
    {first_name:"shubham",last_name:"singh",gender:"Male",email:"abc@gmail.com"},
    {first_name:"akash",last_name:"yadav",gender:"Male",email:"def@gmail.com"},
    {first_name:"naga",last_name:"prabhu",gender:"Male",email:"nagaprabhu@gmail.com"}
  ]);
};
