import { useDispatch, useSelector } from 'react-redux';
// import viewEditSlice from '../redux/slice/viewEditSlice';
import { useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import getQuestionSlice from '../redux/slice/getQuestionSlice';

function ViewEditEditor() {
  const dispatch = useDispatch();
  const editorRef = useRef();
  const question = useSelector((state) => {
    return state.getQuestion.response;
  });
  const handleChangeInput = () => {
    editorRef.current?.getInstance().getMarkdown().length > 0
      ? dispatch(
          getQuestionSlice.actions.get({
            ...question,
            content: editorRef.current?.getInstance().getMarkdown(),
          })
        )
      : dispatch(
          getQuestionSlice.actions.get({
            ...question,
            content: ' ',
          })
        );
  };

  return (
    <div>
      {question.content && (
        <Editor
          ref={editorRef}
          id="body"
          initialValue={`${question.content}`}
          onChange={handleChangeInput}
        />
      )}
    </div>
  );
}

export default ViewEditEditor;
