# toDoList

## write an article
<ol>
  <li>a box for writing the article done</li> 
  <li>save the article to the category done</li> 
  <li>upload a picture done</li>
     <ol>
      <li>upload a picture to cloudinary DONE</li>
      <li>save the url to the Article DONE</li>
    </ol>
</ol>

## EDIT AN ARTICLE
<ol>

  <li>
    make a button to edit the article
  </li>
  <li>
    show button if the user is the author
        <ol>
          <li>
            add the id of the user to the article
          </li>
           <li>
            add articles field to user schema
          </li>
           <li>
           compare the id of the article to the id of the author
          </li>
        </ol>
  </li>
  <li>
    make a route to edit the article
  </li>
</ol>


## make log out and login show depinding on state

#### first of all beacuse the the header is the layout, it is impossiple for log in page to acsses the stae there, so we have to make a context and wrap the root layoyt with that context beacuse we want the IsAusthintced state to be consistent across the app and we dont want to keep passing it from a child to child, its bad.

- we need to make a context using "createContext"
- we need to declare the values we need to pass to children. 
- warp the children inside the context provider component
- use useContext in the children components and pass the context inside useContext