class ListBinding {
    constructor(_element) {
        this.listElement = _element;
        this.textList = [];
    }

    //generate html element, makes an <li> element/tag
    static createListItem(text) {
        const li = document.createElement("li");
        li.textContent = text;
        return li;
    }

        //this method updates the list (inserts all the strings to the list Element property ) 
    update() {
        // remove all existing <li> elements/tags
        while (this.listElement.firstChild) {
            this.listElement.removeChild(this.listElement.firstChild);
        }

        // fill <ul> tag with <li>
        for (const text of this.textList) {
            this.listElement.appendChild(ListBinding.createListItem(text));
        }
    }

    // add method
    add(text) { 
        this.textList.push(text);
        this.update();
    }
    //remove a particular index
    remove(index) { 
        //removes 1 item
        this.textList.splice(index, 1);
        this.update();
        }
    }
const list = document.getElementById("list");
const listBinding = new ListBinding(list);