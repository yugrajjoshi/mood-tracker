# Mood Tracker (Node.js)

A basic Node.js project to practice HTTP request methods (GET, POST, PUT, PATCH, DELETE). This is a simple learning project to reinforce practical knowledge of Node.js request handling.

## What this  does

- Shows the current mood in the browser.
- Lets you update the mood using different HTTP methods.
- Demonstrates how request bodies are read and processed.

## How to run (local only)

1. **Copy the code** into a file named `mood-tracker.js`.
2. **Open a terminal** in the project folder.
3. **Run the server:**

   ```bash
   node mood-tracker.js
   ```

4. You’ll see a link printed in the terminal (usually `http://localhost:3000/mood`).
5. **Open the link in your browser** to view the current mood and the available commands.

## How to test (second terminal)

Open a **second terminal** to send requests while the server is running.

> Note: On my Windows setup, I  use `curl.exe` instead of `curl` cause i use the path of terminal in which the file is located (optional).

### POST (add a mood)

```bash
curl -X POST http://localhost:3000/post -d "happy"
```

### PUT (replace the mood)

```bash
curl -X PUT http://localhost:3000/update -d "excited"
```

### PATCH (append to mood)

```bash
curl -X PATCH http://localhost:3000/edit -d " and tired"
```

### DELETE (clear mood)

```bash
curl -X DELETE http://localhost:3000/delete
```

After each request, **refresh the browser** page to see the updated mood.
