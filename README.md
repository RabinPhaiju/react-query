# What is React Query?

    - A library for fetching data in a react application.

# Why?

    - Since, React is a UI libarary, ther is no specific pattern for data fetching.
    - useEffect hook for data fetching and useState hook to maintain component state like loading, error or resulting data.
    - If the data is needed throughtout the app, we tend to use state manangement libararies.
    - Most of the state management libraries are good for working with client state.
    - State management libraries are not great for working with asynchronous or server state.

# Client vs server state

    * Client state
        - Persisted in your app memory and accessing or updating it is synchronous
    * Server state
        - Persisted remotely and requires asynchronous APIs for fetching or updating
        - Has shared ownership
        - Data can be updated by someone else without your knowledge
        - UI data may not be in sync with the remote data
        - Challenging when you have to deal with caching, deduping multiple requests for the same data,
        - updating stale data in the background, performance optimizations etc
