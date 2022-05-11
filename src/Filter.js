import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Filter({searchParams, setSearchParams}) {

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-rose-200 text-sm font-medium text-gray-700 hover:bg-rose-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-rose-300">
         Sort
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-bottom-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-rose-200 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={()=>setSearchParams({sort : 'ascending'})}
                  className={classNames(
                    active ? 'bg-rose-300 text-gray-900' : 'text-gray-700',
                    'block px-4 w-full py-2 text-sm'
                  )}
                >
                  Prix croissant
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                onClick={()=>setSearchParams({sort : 'descending'})}
                  className={classNames(
                    active ? 'bg-rose-300 text-gray-900' : 'text-gray-700',
                    'block px-4 w-full py-2 text-sm'
                  )}
                >
                 Prix décroissant
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                onClick={()=>setSearchParams({sort : 'alphabetical'})}
                  className={classNames(
                    active ? 'bg-rose-300 text-gray-900' : 'text-gray-700',
                    'block w-full px-4 py-2 text-sm'
                  )}
                >
                  De A à Z
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                onClick={()=>setSearchParams({})}
                  className={classNames(
                    active ? 'bg-rose-300 text-gray-900' : 'text-gray-700',
                    'block w-full px-4 py-2 text-sm'
                  )}
                >
                 Tous les produits
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}