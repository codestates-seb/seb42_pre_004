import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import getTagsSLice from '../redux/slice/getTags';
import Tags from '../pages/Tags';

function TagsLists() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.getTags.tags;
  });
  useEffect(() => {
    const getTagsData = async () => {
      try {
        const response = await axios.get('http://localhost:3003/tags');
        dispatch(getTagsSLice.actions.get(response.data));
      } catch (error) {
        console.log(error);
      }
    };
    getTagsData();
  }, []);

  return (
    <div>
      {data.map((el) => {
        return <Tags key={el.id} tags={el} />;
      })}
    </div>
  );
}

export default TagsLists;
