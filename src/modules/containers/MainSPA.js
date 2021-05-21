import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import Searcher from './Searcher';
import FavouriteList from './FavouriteList';

const menuProps = [
  {
    id: 1,
    name: 'Search',
    description: ' Search gnomes by, id, name, friends or work',
  },
  {
    id: 2,
    name: 'Your Favorites',
    description: 'Watch your favorites gnomes saved.',
  },
];

export default function MainSPA() {
  const [selected, setSelected] = useState(menuProps[0]);

  return (
    <div className="w-full   py-2 bg-gray-900 transition transition-all duration-500 ease-in-out transform">
      <div className="w-full max-w-md mx-auto">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="gnomeFace sr-only">
            Face Gnome
          </RadioGroup.Label>
          <div className="space-y-2">
            {menuProps.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-offset-2 ring-offset-light-blue-300 ring-white ring-opacity-60'
                      : ''
                  }
                  ${
                    checked
                      ? 'bg-light-blue-900 bg-opacity-75 text-white'
                      : 'bg-white'
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? 'text-light-blue-100' : 'text-gray-500'
                            }`}
                          >
                            <span aria-hidden="true">{plan.description}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="flex-shrink-0 text-white">
                          <CheckIcon className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
      {selected.id == 1 ? <Searcher /> : <FavouriteList />}
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
