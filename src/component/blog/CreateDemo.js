import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function CreateDemo() {
    const [isTopEditorVisible, setTopEditorVisible] = useState(false);
    const [isBottomEditorVisible, setBottomEditorVisible] = useState(false);
    const [contentTop, setContentTop] = useState('');
    const [contentBottom, setContentBottom] = useState('');

    const handleTopInputClick = () => {
        setTopEditorVisible(true);
    };

    const handleBottomInputClick = () => {
        setBottomEditorVisible(true);
    };

    const handleEditorChange = (event, editor, contentStateUpdater) => {
        const data = editor.getData();
        contentStateUpdater(data);
    };

    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputTitle2" className="form-label">
                        Nội dung trên
                    </label>
                    {isTopEditorVisible ? (
                        <CKEditor
                            editor={ClassicEditor}
                            data={contentTop}
                            onReady={(editor) => {
                                editor.editing.view.change((writer) => {
                                    writer.setStyle('height', '200px', editor.editing.view.document.getRoot());
                                });
                            }}
                            onChange={(event, editor) => {
                                handleEditorChange(event, editor, setContentTop);
                            }}
                        />
                    ) : (
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputTitle2"
                            onClick={handleTopInputClick}
                        />
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputTitle" className="form-label">
                        Nội dung dưới
                    </label>
                    {isBottomEditorVisible ? (
                        <CKEditor
                            editor={ClassicEditor}
                            data={contentBottom}
                            onReady={(editor) => {
                                editor.editing.view.change((writer) => {
                                    writer.setStyle('height', '200px', editor.editing.view.document.getRoot());
                                });
                            }}
                            onChange={(event, editor) => {
                                handleEditorChange(event, editor, setContentBottom);
                            }}
                        />
                    ) : (
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputTitle"
                            onClick={handleBottomInputClick}
                        />
                    )}
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}
