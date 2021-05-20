import React from 'react';
import { connect } from 'react-redux';
import { setLimits, setQuery } from '../../actions';

import OrderBy from '../components/orderBy/OrderBy';

import InputPredict from 'react-inline-predict';

import {
  generatePredict,
  predictArrayDict,
} from '../components/generatePredict';
import TemplateCard from '../components/TemplateCard';

let startIndex = 0;
let actualPage = 1;
let idSelectLimitsResults = 'limitResults';
let idInputSearch = 'inputSearchResults';
const Searcher = (props) => {
  const { Brastlewark, myList, resultsPerPage, query } = props;
  let count = 0;

  const handleSetLimits = (value) => {
    actualPage = 1;
    props.setLimits(value);
  };

  const handleSetQuery = (
    queryString = document.getElementById(idInputSearch).value
  ) => {
    props.setQuery(queryString);
  };

  const showMore = () => {
    actualPage++;
    props.setLimits(
      document.getElementById(idSelectLimitsResults).value * actualPage
    );
  };
  const clearList = () => {
    actualPage = 1;
    props.setLimits(
      document.getElementById(idSelectLimitsResults).value * actualPage
    );
  };

  generatePredict(Brastlewark);

  return (
    <>
      <div class="mt-2 flex flex-wrap justify-center gap-2 p-4 bg-gray-200 text-center margin-auto w-full">
        <InputPredict
          class="p-4  bg-gray-100 shadow-sm rounded-sm"
          id={idInputSearch}
          onKeyUp={(event) => handleSetQuery(event.target.value)}
          type="text"
          name="name"
          placeholder="Search Gnome"
          dictionary={predictArrayDict}
        />

        <OrderBy
          array={Brastlewark}
          callback={() => handleSetQuery()}
        ></OrderBy>
        <select
          class="p-2 shadow-md rounded-md"
          defaultValue={resultsPerPage}
          onChange={(event) => handleSetLimits(event.target.value)}
          id={idSelectLimitsResults}
        >
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="1000">1000</option>
          <option value="999999999">All</option>
        </select>
      </div>
      {/* <div>{Brastlewark.length}</div> */}
      <br></br>
      <div></div>
      <div>
        {/* <h1>LISTA</h1> */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 transition ease-out duration-700">
          {Brastlewark.slice(startIndex).map((gnome, i) => {
            if (count <= resultsPerPage) {
              let regexText = '';
              if (query[0].length > 0) {
                for (let i = 0; i < query[0].length; i++) {
                  regexText +=
                    '[' +
                    query[0][i].toUpperCase() +
                    '||' +
                    query[0][i].toLowerCase() +
                    ']';
                }
              }

              const regex = new RegExp('.*' + regexText + '.*');
              let gnomeProfessions = false;
              let gnomeFriends = false;
              if (gnome.professions) {
                for (let i = 0; i < gnome.professions.length; i++) {
                  if (regex.test(gnome.professions[i])) {
                    gnomeProfessions = true;
                  }
                }
              }
              if (gnome.friends) {
                for (let i = 0; i < gnome.friends.length; i++) {
                  if (regex.test(gnome.friends[i])) {
                    gnomeFriends = true;
                  }
                }
              }

              if (
                gnome.id === parseInt(query) ||
                regex.test(gnome.name) ||
                gnomeProfessions ||
                gnomeFriends
              ) {
                count += 1;

                if (count <= resultsPerPage) {
                  return (
                    <div key={gnome.id}>
                      <TemplateCard
                        gnome={gnome}
                        gnomeProfessions={gnomeProfessions}
                        gnomeFriends={gnomeFriends}
                        favs={myList}
                      ></TemplateCard>
                    </div>
                  );
                }
              }
            }
          })}
        </div>
      </div>

      {count === 0 ? (
        <div>
          <div
            id="ResultsNotFound"
            className="text-white grid justify-items-center text-center"
          >
            I didn't found anything
            <img
              alt="not found :("
              class="w-64 margin-auto center"
              src="https://64.media.tumblr.com/10a840955b9b408d8a5698a394a23705/tumblr_inline_p568x3I4pl1r4iznv_500.gifv"
            ></img>
          </div>
        </div>
      ) : null}
      <button
        class=" transition ease-out duration-700 w-full p-4 mt-4 mb-4 text-xl font-bold  text-white hover:bg-gray-200 hover:text-black"
        onClick={showMore}
      >
        Show More
      </button>
      <button
        class="transition ease-out duration-700 w-full p-4 mt-4 mb-4 text-xl font-bold  text-white hover:bg-gray-200 hover:text-black"
        onClick={clearList}
      >
        Clear Results
      </button>
    </>
  );
};

// export default Searcher;
const mapStateToProps = (state) => {
  return {
    Brastlewark: state.Brastlewark,
    myList: state.myList,
    resultsPerPage: state.resultsPerPage,
    query: state.query,
  };
};

const mapDispatchToProps = {
  setLimits,
  setQuery,
};

export default connect(mapStateToProps, mapDispatchToProps)(Searcher);
// export default connect(mapStateToProps, null)(Searcher);
