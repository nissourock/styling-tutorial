
import React, {useEffect} from 'react';
import {useMutation, useQueryClient} from 'react-query';
import axios from 'axios';
import {useState} from 'react';
import { Snackbar, Alert ,Skeleton} from '@mui/material';
import Tableelement from './Tableelement'
import Skeletonrow from './Skeletonrow';


export default function Usertable({data}) {
    const [edit, setEdit] = useState([false, {id: null}]);
    const [selected, setSelected] = useState([]);
    const [fakeLoading, setFakeloading] = useState(true);
    const [delmessage, setDelmessage] = useState();
    const [checked, setChecked] = useState( new Array(data.length).fill(false))   
    const [modifyloading, setModifyloading] = useState(false)
    console.log(checked)

    const user = {
  
        "name": "Anis",
        "avatar": "makech",
        "isAdmin": true,
        
       }
    async function fetchUsers(){
        const {data} = await axios.get('https://625d44794c36c75357722558.mockapi.io/api/users')  
        console.log(data)  
        return data
    }
    async function modifyUser(id, nameValue, colorValue, vehicleValue){
        setModifyloading(true)
         await axios.put(`https://625d44794c36c75357722558.mockapi.io/api/users/${id}`, {
            name: nameValue,
            color: colorValue,
            vehicle: vehicleValue,
        }) ;
        queryClient.invalidateQueries("users");
        setUserform({ name: '',
        color: '',
        vehicle: '',});
        setTimeout(() => {
            setEdit([!edit[0], { id: null }])
            setModifyloading(false)
        }, 2000);
        
        
    }
   
    function deleteUser(idTodelete){
        if( idTodelete.lenght>1){
       idTodelete.map(item  =>{ 
           return (axios.delete(`https://625d44794c36c75357722558.mockapi.io/api/users/${item}`), console.log("deleted"))   
        })}
        else {setDelmessage(idTodelete +'was deleted');console.log(delmessage)
            return axios.delete(`https://625d44794c36c75357722558.mockapi.io/api/users/${idTodelete}`)}
        // await axios.delete(`https://625d44794c36c75357722558.mockapi.io/api/users/${id}`)
    }
    const queryClient = useQueryClient()
    const delmutation = useMutation(deleteUser, {
        onMutate: async (id) => {
            await queryClient.cancelQueries('users');
            const previousUsers = queryClient.getQueryData('users');
            queryClient.setQueryData('users', previousUsers.filter(user => user.id !==id))
            return {previousUsers};
            
        },
        onError: (err,id, context) => {
            queryClient.setQueryData('users', context.previousUsers);
            console.log(err)
        },
        onSettled: () => {
            queryClient.invalidateQueries('users')
        }
        })
    const modifymutation = useMutation(modifyUser)
const [userform, setUserform] = useState({ name: '',
color: '',
vehicle: '',})


useEffect(() => {
    setTimeout(() => {
        setFakeloading(false)
    }, 2000);
}, [fakeLoading]);


  return (
    <>
    
    {delmessage!=='' && <Snackbar
  
  autoHideDuration={6000}
  onClose={setDelmessage('')}
  message={delmessage}
  
/>}

    <button className='text-xl p-2 border-2 mx-auto' onClick={() => delmutation.mutate(user.id)}>DELETE</button>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg px-6">
         
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" class="px-16 py-3">
                              Name
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Id
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Color
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Car
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Created at
                          </th>
                          <th scope="col" class="px-6 py-3">
                              <span class="sr-only">Edit</span>
                          </th>
                      </tr>
                      

                     


                  </thead>
                  <tbody>
                 {fakeLoading ? <><Skeletonrow/>
                  <Skeletonrow/>
                  <Skeletonrow/>
                  <Skeletonrow/>
                  <Skeletonrow/>
 </> :  null}
                 
                  
                     {data?.map((user,index) => {
                         return ( <Tableelement user={user} edit={edit} setEdit={setEdit} delmutation={delmutation} modifyUser={modifyUser} userform={userform}  setUserform={setUserform}/>
                           )

                            })}
                      
                     
                      
                  </tbody>
              </table>
          </div>

    </>
  );
}
