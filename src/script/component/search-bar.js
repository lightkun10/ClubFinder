class SearchBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    get value() {
        return this.querySelector('#searchElement').value;
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div id="search-container" class="search-container">
                <input placeholder="Search football club" id="searchElement" type="search">
                <button id="searchButtonElement" type="submit">Search</button>
            </div>
        `
        
        this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);