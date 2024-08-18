import { useState } from "react";

// Custom hook that return the state and a function to update it
export const useAsyncState = (initialValue: any) =>{
    const [value, setValue] = useState(initialValue);
    // This code defines a function setter that takes a value x and returns a Promise. When called, it sets the state using setValue(x) and then immediately resolves the Promise, indicating that the state update is complete.
    const setter = (x: any) =>
        // In summary, this code creates a new Promise that:
        // Updates the state with the new value x using setValue(x).
        // Resolves the Promise immediately using resolve().
        new Promise<void>(resolve => {
            setValue(x);
            resolve();
        });
    return [value, setter];
}
