
import React from "react";
import { initialStories } from "../store/InitialState";

export const getAsyncStories = () =>
    new Promise((resolve) =>
      setTimeout(
        () => resolve({ data: { stories: initialStories } }),
        2000
      )
);

export const useSemiPersistentState = (key, initialState) => {
    const [value, setValue] = React.useState(
        localStorage.getItem(key) || initialState
    );

    React.useEffect(() => {
        localStorage.setItem(key, value);
    }, [value, key]);

    return [value, setValue];
};
