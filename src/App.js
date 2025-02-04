import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        // Texto por defecto en el editor
        setMarkdown(`# Encabezado H1\n## Encabezado H2\n[Enlace](https://www.ejemplo.com)\n\`\`\`javascript\nconsole.log('Hola Mundo');\n\`\`\`\n- Elemento de lista\n> Cita en bloque\n**Texto en negrita**`);
    }, []);

    const handleChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div className="container">
            <h1 className="text-center">Markdown Previewer</h1>
            <div className="row">
                <div className="col-md-6">
                    <h2>Editor</h2>
                    <textarea 
                        id="editor" 
                        value={markdown} 
                        onChange={handleChange} 
                        className="form-control" 
                        rows="20"
                    />
                </div>
                <div className="col-md-6">
                    <h2>Preview</h2>
                    <div 
                        id="preview" 
                        dangerouslySetInnerHTML={{ __html: marked(markdown) }} 
                        className="border p-3"
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
