import React , {useState, useEffect} from 'react';

 import axios from 'axios';
import Usertable from './Usertable';
import {useQuery, useMutation, useQueryClient} from 'react-query'

 async function fetchUsers(){
    const {data} = await axios.get('https://625d44794c36c75357722558.mockapi.io/api/users')  
    console.log(data)  
    return data
}
async function postUser(){
    const res = await axios.delete('https://625d44794c36c75357722558.mockapi.io/api/users', user)
}
async function deleteUser(id){
    const res = await axios.delete(`https://625d44794c36c75357722558.mockapi.io/api/users/${id}`)
}



const user = {
  
    "name": "Anis",
    "avatar": "makech",
    "isAdmin": true,
    
   }


 
 const Productwrapper3 = () => {
    const queryClient = useQueryClient()
    
    const {data, error, isError, isLoading } = useQuery('users', fetchUsers) 
    //  const mutation = useMutation(deleteUser, {
    //      onSuccess: async () => {
    //          await queryClient.invalidateQueries('users');
    //          console.log('success')
    //      }})
         const mutation = useMutation(deleteUser, {
            onMutate: async (id) => {
                await queryClient.cancelQueries('users');
                const previousUsers = queryClient.getQueryData('users');
                queryClient.setQueryData('users', previousUsers.filter(user => user.id !==id))
                return {previousUsers};
                
            },
            onError: (err,id, context) => {
                queryClient.setQueryData('users', context.previousUsers);
                console.log(error)
            },
            onSettled: () => {
                queryClient.invalidateQueries('users')
            }
        })
    // first argument is a string to cache and track the query result
    if(isLoading){
        return <div class="flex-1 min-h-screen flex justify-center items-start p-12 bg-rose-100">

        <div class="loader bg-rose-100 p-5 rounded-full flex space-x-3">
          <div class="w-5 h-5 bg-rose-400 rounded-full animate-bounce"></div>
          <div class="w-5 h-5 bg-rose-500 rounded-full animate-bounce"></div>
          <div class="w-5 h-5 bg-rose-600 rounded-full animate-bounce"></div>
          
        </div>
        
        
     
      </div>
    }
    if(isError){
        return <div>Error! {error.message}</div>
    }
    
    return(<>
        <div className='flex-1 container p-10'>
        <h1>Users</h1>
       {/* {
                data.map((user) => {
                    return (<><li key={user.id}> {user.name}, {user.id} </li>
                    <button className='border-4' onClick={()=>mutation.mutate(user.id)}> Delete </button>
                    </>)
                })
            }  */}


        </div>

        <Usertable data={data}/>
        </>
    )
    
    
}
    
 
 export default Productwrapper3;
 