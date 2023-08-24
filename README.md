# Monsters Rolodex React App with Vite

This is my first react app project with vite.

## Purpose

- It is a basic program that calls an API for the monsters information
- Filters through the monsters using the search input
  

## Challenges
- It was quite challenging understanding the basic syntaxes of react being my first time writing a react code.
- i had issues with the props, as i had to make validations of each props defined in each components created in the app.
  
```jsx
SearchBox.propTypes = {
    placeholder: PropTypes.node.isRequired,
    handleChange: PropTypes.func.isRequired,
}

Card.propTypes = {
    monster: PropTypes.any.isRequired,
    // or
    // monster: PropTypes.shape({
    //     name: PropTypes.string.isRequired,
    // }).isRequired,
}
```

