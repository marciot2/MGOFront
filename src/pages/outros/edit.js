import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const HtmlEditor = ({ }) => {
	const editor = useRef(null);
	const [content, setContent] = useState('');

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
			tabIndex={2} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {}}
		/>
	);
};

export default HtmlEditor;