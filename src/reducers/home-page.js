const initialState = {
    steps: [
        {
            header: "Make MyFirstComponent.js",
            imageSrc: "first-component.png",
            description: `#### __This is the file that will house your first component's code__
> *Make sure to create it at \`/src/components\`*`
        },
        {
            header: "Hello World!",
            imageSrc: "hello-world.png",
            description: `#### __Code for our first component__
* Our component does not do much, it prints hello world into the DOM
* Note how we import React and the component that we're creating simply extends React.Component
    - This is how we create a basic react component
* This component has one \`render\` method
    - This method controls what this component will render into the DOM (in this case, a simple header element)
* **Make sure you don't forget to export your component**
    - This is how we will use our component from else where`
        },
        {
            header: "Add a route to your component",
            imageSrc: "add-to-routes.png",
            description: `#### __Next we need to add a client side route to our component__
* Open \`/src/routes.js\`
* We first import our component **(line: 8)**
* Notice how we add a \`Route\` at **(line: 13)**
    - The \`Route\` itself is another component that is imported from \`react-router\` **(line: 2)**
    - This component takes two properties - \`path\`(url route for our component) and \`component\`(imported component reference)
* Once this is done, you can manually visit your component via [http://localhost:3000/my-component](http://localhost:3000/my-component)`
        },
        {
            header: "Add a link button to your component",
            imageSrc: "add-link.png",
            description: `#### __Create a link button to your component__
* Open \`/src/components/core-components/App.js\`
* Just replicate the link to **Home (line 11)**
    - but instead of pointing to \`/\`, point to \`/my-component\`
    - and change the label to **MyFirstComponent**
> *You should notice that a link button was added next to the home link button*`
        },
        {
            header: "Add a link button to your component",
            imageSrc: "component.png",
            description: `#### __Congratulations, you've made your first functional component!__`
        }
    ]
};

export default function reducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        default:
        {
            // do nothing
            newState = state;
        }
    }
    return newState;
}