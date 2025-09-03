import { CodeEditor } from "@/components/animate-ui/components/code-editor";
import { useState } from "react";

export default function CodeEditorDemo() {
  const [isWriting, setIsWriting] = useState(true);

  const handleStartTyping = () => {
    setIsWriting(true);
  };

  return (
    <div className="code-editor-container">
      <CodeEditor
        cursor
        className="w-[full] h-[480px]"
        lang="tsx"
        title="component.tsx"
        duration={15}
        delay={0.5}
        copyButton
        writing={isWriting}
        onDone={() => setIsWriting(false)}
      >
        {`for (let i = 0; i < 10; i++) {
          console.log(i);
        }`}
      </CodeEditor>

      {/* <button
        onClick={handleStartTyping}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Start Typing
      </button> */}
    </div>
  );
}
