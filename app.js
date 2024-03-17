import React, { useState } from 'react';
import './App.css';

function App() {
      const [text, setText] = useState('');
        const [result, setResult] = useState('');

          const analyzeText = async () => {
                const response = await fetch('/api/analyze', {
                          method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                      body: JSON.stringify({ text }),
                });
                    const data = await response.json();
                        setResult(data.result);
          };

            return (
                    <div className="App">
                          <input
                                  type="text"
                                          value={text}
                                                  onChange={(e) => setText(e.target.value)}
                                                          placeholder="Enter text to analyze"
                                                                />
                                                                      <button onClick={analyzeText}>Analyze</button>
                                                                            <p>Result: {result}</p>
                                                                                </div>
            );
}

export default App;
            )
                })
          }
}