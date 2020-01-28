1. What problem does the context API help solve?

- The Context API is a way to share values between components without manual prop drilling. When there is global data that lots of components use, especially components nested deep in the component tree, it is cumbersome to explicitly pass it to each level. What ends up happening with excessive prop drilling is that intermediate components that don't even use the data have to receive it just to pass it down. This is not very scalable if there is a lot of global data. Using Context is more intuitive and cleaner.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- Actions in Redux are objects that are passed to the reducer. They send data from the application and contain instructions on how to handle the updating of the state. 
- Reducer functions generally result in a single output value e.g. reducing an array of numbers to a single sum. The reducer in Redux does something similar, containing logic to "reduce" a previous state to a new state. 
- The store in Redux is a single object that contains all state data and represents everything that changes within the application. It is a "single source of truth" because (1) the store represents the state of the entire application and (2) all state data passed to components comes from the centralized store. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state is available to all components whereas component state is localized to that component. Data should be shared between only the components that need it, so most of the time, it is fine to use component state. A good use for application state is for data that lots of components depend on (e.g. UI theme, current user).

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- redux-thunk is middleware (intercepts actions before they are passed to a reducer) that allows action-creators to make asynchronous API calls. The action-creators complete the API call before dispatching the action.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

- My favorite state management system is Redux. It is very powerful. I knew Redux was useful when I was setting up the state returned in the reducer after a certain action, and I could easily change the state of multiple components. It does take a long time to set up though. 