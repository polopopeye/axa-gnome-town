import React, { Fragment, useState, useEffect } from 'react';

import { Listbox, Transition, Switch } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import {
  orderByID,
  orderByName,
  orderByHeight,
  orderByWeight,
  orderByHairColor,
} from './filterFunctions';

let modeSorted = 'asc';
function ChangeOrderMode(props) {
  const [modeToOrder, setmodeToOrder] = useState(false);
  if (modeToOrder === false) {
    modeSorted = 'asc';
  } else {
    modeSorted = 'desc';
  }

  useEffect(() => {
    if (modeSelected === modeSort[0]) {
      orderByID(modeSorted, props.array);
    }
    if (modeSelected === modeSort[1]) {
      orderByName(modeSorted, props.array);
    }
    if (modeSelected === modeSort[2]) {
      orderByHeight(modeSorted, props.array);
    }
    if (modeSelected === modeSort[3]) {
      orderByWeight(modeSorted, props.array);
    }
    if (modeSelected === modeSort[4]) {
      orderByHairColor(modeSorted, props.array);
    }

    props.callback();
  }, [modeToOrder]);

  return (
    <div className="bg-gray-100 ml-2 mr-2 rounded-lg shadow-lg p-2 ">
      <Switch
        checked={modeToOrder}
        onChange={setmodeToOrder}
        className={`${modeToOrder ? 'bg-teal-900' : 'bg-teal-700'}
          relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <p class="text-sm mt-1">Ascendent</p>

        <h1
          aria-hidden="true"
          style={{ width: '2em', height: '2em' }}
          className={`${modeToOrder ? 'translate-x-10' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
        <p className="ml-10 text-sm mt-1">Descendent</p>
      </Switch>
    </div>
  );
}

const modeSort = [
  { name: 'Order By ID' },
  { name: 'Order By Name' },
  { name: 'Order By Height' },
  { name: 'Order By Weight' },
  { name: 'Order By Hair Color' },
];
let modeSelected;
const OrderBy = (props) => {
  const [selected, setSelected] = useState(modeSort[0]);

  modeSelected = selected;

  useEffect(() => {
    if (selected === modeSort[0]) {
      orderByID(modeSorted, props.array);
    }
    if (selected === modeSort[1]) {
      orderByName(modeSorted, props.array);
    }
    if (selected === modeSort[2]) {
      orderByHeight(modeSorted, props.array);
    }
    if (selected === modeSort[3]) {
      orderByWeight(modeSorted, props.array);
    }
    if (selected === modeSort[4]) {
      orderByHairColor(modeSorted, props.array);
    }
    props.callback();
  }, [selected]);

  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1 w-40 z-10">
          <Listbox.Button className="relative w-full py-5 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {modeSort.map((filterMode, filterModeIdx) => (
                <Listbox.Option
                  key={filterModeIdx}
                  className={({ active }) =>
                    `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={filterMode}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? 'font-medium' : 'font-normal'
                        } block truncate`}
                      >
                        {filterMode.name}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? 'text-amber-600' : 'text-amber-600'
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      <ChangeOrderMode
        array={props.array}
        callback={props.callback}
      ></ChangeOrderMode>
    </>
  );
};

export default OrderBy;
