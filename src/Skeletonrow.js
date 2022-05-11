import { Snackbar, Alert, Skeleton } from '@mui/material';
import React from 'react';
export default function Skeletonrow() {
    return (
        <>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    <div class="form-check ">
                        <Skeleton />
                    </div>
                    <Skeleton />
                </th>
                <td class="px-6 py-4">
                    <Skeleton />

                </td>
                <td class="px-6 py-4">
                    <Skeleton />

                </td>
                <td class="px-6 py-4">
                    <Skeleton />

                </td>
                <td class="px-2 py-4 text-right">
                    <Skeleton />
                </td>
                <td class="px-2 py-4 text-right">
                    <Skeleton />    </td>
            </tr>
        </>
    );
}



