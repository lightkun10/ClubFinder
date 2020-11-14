import '../component/search-bar.js';
import '../component/club-list.js';
import DataSource from '../data/data-source.js';

const main = function () {
    const searchBar = document.querySelector("search-bar");
    const clubList = document.querySelector('club-list');

    /** Using only promise. */
    // const onButtonSearchClicked = function () {
    //     DataSource.searchClub(searchBar.value)
    //     .then(renderResult)
    //     .catch(fallbackResult);
    // };

    /** Using async/await. */
    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchClub(searchBar.value);
            renderResult(result);
        } catch (msg) {
            fallbackResult(msg);
        }
    }

    const renderResult = results => {
        clubList.clubs = results;
    };

    const fallbackResult = function (message) {
        clubList.renderError(message);
    };

    // buttonSearchElement.addEventListener("click", onButtonSearchClicked);
    searchBar.clickEvent = onButtonSearchClicked;
};

export default main;