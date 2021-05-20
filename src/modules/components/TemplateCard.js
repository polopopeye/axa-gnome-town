import React from 'react';
import { connect } from 'react-redux';

import { setFavourite, deleteFavourite } from '../../actions';
import { StarIcon } from '@heroicons/react/solid';
import { StarIcon as StarIconSolid } from '@heroicons/react/outline';

import PopOverCard from './popOver';
const TemplateCard = (props) => {
  let gnome = props.gnome;
  let gnomeProfessions = props.gnomeProfessions;
  let gnomeFriends = props.gnomeFriends;
  let foundby = 'Name';
  if (gnomeProfessions && gnomeFriends) {
    foundby = 'Work and Friends';
  } else {
    if (gnomeProfessions === true && gnomeFriends === false) {
      foundby = 'Work';
    }
    if (gnomeProfessions === false && gnomeFriends === true) {
      foundby = 'Friends';
    }
  }

  let myList = props.favs;

  const handleSetFavourite = () => {
    props.setFavourite({
      id: props.gnome.id,
      name: props.gnome.name,
    });
  };

  const handleDeleteFavourite = (id) => {
    props.deleteFavourite(id);
  };

  return (
    <div class="rounded-lg shadow-lg bg-green-100 transition ease-out duration-700">
      <div class="text-center text-xl font-bold p-4 transition ease-out duration-700">
        {gnome.name}
      </div>
      <div class="flex justify-end -mt-12 mr-2">
        {myList.some(
          (myList) => myList.id !== undefined && myList.id === gnome.id
        ) ? (
          <button
            key={myList.id}
            onClick={() => handleDeleteFavourite(gnome.id)}
          >
            <StarIcon className="h-10 w-10 text-yellow-400 hover:text-yellow-700 transition ease-in-out duration-700 " />
          </button>
        ) : (
          <button key={gnome.id} onClick={() => handleSetFavourite()}>
            <StarIconSolid className="h-10 w-10 text-yellow-400 hover:text-yellow-700 transition ease-in-out duration-700" />
          </button>
        )}
      </div>

      <div class="text-xs absolute left -mt-8 ml-1 transition ease-in-out duration-700">
        {gnome.id}
      </div>
      {/* BODY */}
      <div class="grid grid-cols-2 transition ease-in-out duration-700">
        <div class="p-4 transition ease-in-out duration-700">
          <img
            class="rounded-lg shadow-lg transition ease-in-out duration-700"
            src={gnome.thumbnail}
            alt={gnome.name}
          />
        </div>
        <div class="p-4 transition ease-in-out duration-700">
          <div class="col-span-2">Weight: {gnome.weight.toFixed(2)} kg</div>
          <div class="col-span-2">Height: {gnome.height.toFixed(2)} cm</div>
          <div class="flex">
            Hair:
            {gnome.hair_color}
            <div
              class="w-4 h-4"
              style={{
                backgroundColor: gnome.hair_color,
                marginLeft: '5px',
                marginTop: '5px',
              }}
            ></div>
          </div>

          {gnome.friends.length > 0 ? (
            <PopOverCard tittle="Friends" arrayButton={gnome.friends} />
          ) : (
            <div class="bg-gray-900 text-center text-white p-2 rounded-md text-opacity-90 font-medium">
              ¡No friends 😭!
            </div>
          )}
          <br></br>
          {gnome.friends.length > 0 ? (
            <PopOverCard tittle="Works" arrayButton={gnome.professions} />
          ) : (
            <div class="bg-gray-900 text-center text-white p-2 rounded-md text-opacity-90 font-medium">
              ¡😱 No works !
            </div>
          )}
        </div>
      </div>
      <div class="text-center">Result found by: {foundby}</div>
    </div>
  );
};

const mapDispatchToProps = {
  setFavourite,
  deleteFavourite,
};

export default connect(null, mapDispatchToProps)(TemplateCard);
