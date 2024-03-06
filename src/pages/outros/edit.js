import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { context } from '@react-three/fiber';

const HtmlEditor = (_message) => {
	const editor = useRef(null);
	const [content, setContent] = useState('.');

	const config = 
        {
			readonly: false,
			editor: '' 
		} 

	return (
		<JoditEditor
			 
			ref={editor}
			value={content}
			config={config}
			tabIndex={2}  
			onBlur={newContent => setContent(newContent)}  
			onChange={newContent => {}}
		/>
	);
};

export default HtmlEditor;	