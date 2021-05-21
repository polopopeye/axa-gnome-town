import React from 'react';
import { connect } from 'react-redux';
import Img from 'react-cool-img';

import TemplateCard from '../components/TemplateCard';

const FavouriteList = (props) => {
  const { myList, Brastlewark } = props;

  return (
    <div>
      <h1 class="text-center text-white text-bold text-xl mt-2">
        Favorites Gnomes
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        {myList.length > 0 ? (
          myList.map((favourite, i) => {
            if (favourite.id !== undefined) {
              let arrayID = Brastlewark.find((obj) => {
                return obj.id === favourite.id;
              });

              return (
                <div key={i}>
                  <>
                    <TemplateCard
                      gnome={arrayID}
                      gnomeProfessions={false}
                      gnomeFriends={false}
                      favs={myList}
                    ></TemplateCard>
                  </>
                </div>
              );
            }
          })
        ) : (
          <div class="col-span-3 text-xl text-center text-bolder grid justify-items-center  text-white mt-8 pb-16">
            <Img
              cache={true}
              lazy={true}
              alt="any favorite found"
              class="w-64 m-auto"
              src="https://www.imer.mx/tropicalisima/wp-content/uploads/sites/19/559395_landscape-tumbleweed.gif"
            />
            U didn't save any gnome...
          </div>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    Brastlewark: state.Brastlewark,
    myList: state.myList,
  };
};

export default connect(mapStateToProps, null)(FavouriteList);
