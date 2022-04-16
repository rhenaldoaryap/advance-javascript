const button = document.querySelector("button");

const buttonClickHandler = (event) => {
  //   event.target.disabled = true;
  console.log(event);
};

const anotherButtonClickHandler = () => {
  console.log("this click and printed to console");
};

/* another way to use eventlistener
button.onclick = buttonClickHandler;
button.onclick = anotherButtonClickHandler; */

/*
    result:
    this click and printed to console
*/

/* using this approach has one major disadvantage
we couldn't use another onclick event anymore
because it will count as override, not count
as double eventlistener */

/* buttons.forEach((button) => {
  button.addEventListener("click", buttonClickHandler);
}); */

/* setTimeout(() => {
  button.removeEventListener("click", buttonClickHandler);
}, 2000); */

const formElement = document.querySelector("form");

formElement.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event);
});

const divElement = document.querySelector("div");

divElement.addEventListener("click", (event) => {
  console.log("CLICKED DIV");
  console.log(event);
});

button.addEventListener("click", (event) => {
  /* stopPropagation will help us to only execute this event
  and not execute any event listener after this one,
  stopPropagation will help us to put this button to capturing (inside to outside)
  rather dan bubbling (outside to inside) */
  event.stopPropagation();
  console.log("CLICKED BUTTON");
  console.log(event);
});

/*
  advantages using delegation

  basically, all we have done to select all elements and add an event listener to it
  using loop, that is not wrong but have some disadvantages
  1. for performance -> because we have lot of event in it and always looping and waiting to occur
  2. for memory -> we alwasy store all of those event in memory because we looping each per each

  what does that mean?
  see this code:

  const listItems = document.querySelectorAll("li");

  listItems.forEach((listItem) => {
    listItem.addEventListener("click", (event) => {
      event.target.classList.toggle("highlight")
    })
  })

  instead of targeting all of list items, we should targetting the parent of the list items.
  that will reduce the cost of performance and memory, because we only selecting one element and then
  give that one element an event listener.
  of course it will make sense to save more performance and memory because we are not selecting many of elements
  and we have same behaviour like previous code.

  see the code below:
*/

const ulElement = document.querySelector("ul");

/* ulElement.addEventListener("click", (event) => {
  event.target.classList.toggle("highlight");
}); */

/*
  but delegation can be cumbersome if our elements is complex,
  what does mean?

  let add more element inside of our list item
  see the events.html code, we adding more elements like h2 and paragraph

  if we have complex elements, the normal delegation (only selecting parent element)
  will not work, because we only using event.target
  event.target only work at the element we click and adding the class based on what we click
  if we click the list item, the highlight class only added to the list item
  if we click to the h2 tag, the highlight class only added to the h2 tag
  and so on..

  so how to solve this then?
  instead of only using event.target, we can use event.target.closest()
  closets means we selecting the closest element based on what we registered on the event listener
  on this case, we registered the unordered list (which is the parent of list item)
  and this will not behave based on what we click, but behave like what we want
  which means add the highlight class on the entire element based on event listener we registered first.
*/

ulElement.addEventListener("click", (event) => {
  event.target.closest("li").classList.toggle("highlight");
});
