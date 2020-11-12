// Old way, menggunakan constructor function
// function DataSource(onSuccess, onFailed) {
//     this.onSuccess = onSuccess;
//     this.onFailed = onFailed;
// }

// DataSource.prototype.searchClub = function (keyword) {

//     const filteredClubs = clubs.filter(club => {
//         return club.name.toUpperCase().includes(keyword.toUpperCase());
//     });

//     if (filteredClubs.length) {
//         this.onSuccess(filteredClubs);
//     } else {
//         this.onFailed(`${keyword} is not found`);
//     }
// };

// Menggunakan Class
class DataSource {
    
    constructor(onSuccess, onFailed) {
        this.onSuccess = onSuccess;
        this.onFailed = onFailed;
    }

    searchClub(keyword) {

        // const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));
        
        // More readable
        const filteredClubs = clubs.filter(club => {
            return club.name.toUpperCase().includes(keyword.toUpperCase())
        });

        if (filteredClubs.length) {
            this.onSuccess(filteredClubs);
        } else {
            this.onFailed(`${keyword} is not found`);
        }
    }

}