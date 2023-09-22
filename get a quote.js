let ID_count = 0
let list_array = []

function add_worker() {
    // emptying fields
    document.getElementById("workers_field").value = "";
    document.getElementById("hours_field").value = "";
    const elem = document.getElementById("item_template");

    // cloning element
    template_clone = elem.cloneNode(true);

    // assigning the id to the clone
    template_clone.id = ID_count;

    // adding event listener for removing clone on button click
    const deleteButton = template_clone.querySelector("button")
    deleteButton.addEventListener("click", () => removeItem(template_clone.id))

    // removing the display none attribute thing
    template_clone.display = "";

    // adding the element to the list
    document.getElementById("list").appendChild(template_clone);
    // appending the ID count
    ID_count += 1;
}

function add_truck() {
    document.getElementById("miles_field").value = "";
}


const removeItem = (id) => {
    const elementToRemove = document.getElementById(id)
    const list = document.querySelector("#list")
    list.removeChild(elementToRemove)
}
