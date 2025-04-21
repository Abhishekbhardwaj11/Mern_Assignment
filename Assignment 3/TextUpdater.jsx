import { useState } from "react";

function TextUpdater() {
  const [text, setText] = useState("");

  return (
    <div className="p-4">
      <input
        type="text"
        className="border p-2 rounded w-full"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p className="mt-2 text-gray-700">You typed: {text}</p>
    </div>
  );
}

export default TextUpdater;
