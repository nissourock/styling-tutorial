import React from 'react'
import Skeletonrow from './Skeletonrow';
export default function Tableelement({ user, edit, setEdit, delmutation, modifyUser, userform, setUserform }) {


    return (
        <>
            <tr key={user.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    <div class="form-check ">
                        <input class="mx-4 form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" id="flexCheckDefault3" />
                    </div>
                    {user.name}
                </th>
                <td class="px-6 py-4">
                    {user.id}
                </td>
                <td class="px-6 py-4">
                    {user.color}
                </td>
                <td class="px-6 py-4">
                    {user.vehicle}
                </td>
                <td class="px-2 py-4 text-right">
                    <button
                        onClick={() => { setEdit([!edit[0], { id: user.id }]) }} href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                </td>
                <td class="px-2 py-4 text-right">
                    <button onClick={() => delmutation.mutate(user.id)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                </td>
            </tr>
            {edit[0] && edit[1].id === user.id ? <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row">
                    <input class=" font-medium text-gray-400 dark:text-white  border-2" placeholder='Enter new name' value={userform.name} onChange={(e) => { setUserform({ ...userform, name: e.target.value }); console.log(userform) }}>

                    </input>
                </td>
                <td class="px-6 py-4">
                    -
                </td>
                <td scope="row">
                    <input class="font-medium text-gray-400 dark:text-white  border-2" placeholder='Enter new color ' value={userform.color} onChange={(e) => { setUserform({ ...userform, color: e.target.value }); console.log(userform) }}>

                    </input>
                </td>
                <td class="px-6 py-4">
                    <input class="font-medium text-gray-400 dark:text-white  border-2" placeholder='Enter new car' value={userform.vehicle} onChange={(e) => { setUserform({ ...userform, vehicle: e.target.value }); console.log(userform) }}>

                    </input>
                </td>
                <td class="px-2 py-4 text-center">
                    <button onClick={() => {
                        modifyUser(user.id, userform.name, userform.color, userform.vehicle);
                    }} class="font-medium px-6 py-2 text-white dark:text-blue-500 hover:underline bg-rose-400">Save</button>
                </td>



            </tr> : null}


        </>
    )
}
