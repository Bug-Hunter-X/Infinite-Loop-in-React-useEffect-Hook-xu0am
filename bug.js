```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic here: the condition is always true
    if (count > 0) {
      console.log('Count is greater than 0');
    }
  }, [count]); // Dependency array missing, useEffect runs infinitely

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```