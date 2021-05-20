import React from 'react';
import { connect } from 'react-redux';
import {
  setFavourite,
  deleteFavourite,
  setLimits,
  setQuery,
} from '../../actions';
// import RetrieveData from '../components/retrieveData';

// RetrieveData();

let startIndex = 0;

let actualPage = 1;

const Searcher = (props) => {
  let idSelectLimitsResults = 'limitResults';
  const { Brastlewark, myList, resultsPerPage, query } = props;
  let count = 0;

  const handleSetFavourite = (id) => {
    props.setFavourite({
      id: Brastlewark[id].id,
      name: Brastlewark[id].name,
    });
  };
  const handleDeleteFavourite = (id) => {
    props.deleteFavourite(id);
  };

  const handleSetLimits = (value) => {
    actualPage = 1;
    props.setLimits(value);
  };

  const handleSetQuery = (queryString = ' ') => {
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
  const orderByID = (mode = 'asc') => {
    if (mode === 'desc') {
      Brastlewark.sort(function (a, b) {
        return parseFloat(b.id) - parseFloat(a.id);
      });
      handleSetQuery();
    }
    if (mode === 'asc') {
      Brastlewark.sort(function (a, b) {
        return parseFloat(a.id) - parseFloat(b.id);
      });
      handleSetQuery();
    }
  };

  const orderByName = (mode = 'asc') => {
    if (mode === 'asc') {
      Brastlewark.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
      handleSetQuery();
    }
    if (mode === 'desc') {
      Brastlewark.sort(function (a, b) {
        return b.name.localeCompare(a.name);
      });
      handleSetQuery();
    }
  };

  return (
    <>
      <h1>{resultsPerPage}</h1>
      <h1>{query}</h1>
      <input
        onKeyUp={(event) => handleSetQuery(event.target.value)}
        type="text"
        placeholder="BUSCAR"
      />
      <select
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
      <div>{Brastlewark.length}</div>

      <br></br>
      <div>
        <button onClick={() => orderByID('asc')}>orderByID ASC</button>
        <button onClick={() => orderByID('desc')}>orderByID DESC</button>
        <button onClick={() => orderByName('asc')}>Nombre ASC</button>
        <button onClick={() => orderByName('desc')}>Nombre DESC</button>
      </div>
      <div>
        <h1>LISTA</h1>

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

            if (gnome.id === parseInt(query) || regex.test(gnome.name)) {
              count += 1;

              if (count <= resultsPerPage) {
                //  Filter match with input
                // console.log(resultsPerPage);
                return (
                  <div key={i}>
                    {gnome.name} : {gnome.id} :
                    {myList.some((myList) => myList.id === gnome.id) ? (
                      <button onClick={() => handleDeleteFavourite(gnome.id)}>
                        ELIMINAR DE FAVS
                      </button>
                    ) : (
                      <button
                        key={gnome.id}
                        onClick={() => handleSetFavourite(gnome.id)}
                      >
                        AÑADIR A FAV
                      </button>
                    )}
                  </div>
                );
              }
            }
          }
        })}

        <h1 id="resultsNotFound"> Sry, Gnome not found :'( </h1>
      </div>
      <div>
        <h1>FAVORITOS</h1>
        {myList.map((favourite, i) => {
          return (
            <div key={i + 'FavList'}>
              {favourite.name}
              {favourite.id > -1 ? (
                <button onClick={() => handleDeleteFavourite(favourite.id)}>
                  ELIMINAR
                </button>
              ) : null}
            </div>
          );
        })}
      </div>

      <button onClick={showMore}>MostrarMas</button>
      <button onClick={clearList}>Limpiar</button>
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
  setFavourite,
  deleteFavourite,
  setLimits,
  setQuery,
};

export default connect(mapStateToProps, mapDispatchToProps)(Searcher);
// export default connect(mapStateToProps, null)(Searcher);
