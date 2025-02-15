# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications involving the `useEffect` hook: an infinite loop caused by a missing dependency and incorrect conditional logic within the effect.

## Bug Description
The `MyComponent` component uses `useEffect` to log a message when the `count` state variable is greater than 0. However, the dependency array is missing, and the condition within the effect is always true. This leads to the effect running continuously, causing an infinite loop of re-renders.

## Solution
The solution involves adding the `count` variable to the `useEffect` dependency array to fix the infinite loop and using the correct conditional logic.