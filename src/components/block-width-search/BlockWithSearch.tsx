import {Form} from "../form/Form";
import {useAppDispatch, useAppSelector} from "../../store/redux-hook";
import {giphyActions, giphySelectors} from "../../store/slices/giphySlice";

export const BlockWithSearch = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(giphySelectors.status)
  const searchResults = useAppSelector(giphySelectors.searchResults)

  const handleSubmit = (query: string) => {
    dispatch(giphyActions.fetchSearchResults(query));
  }

  return (
    <div>
      <h1>SEARCH</h1>

      <Form onSubmit={handleSubmit} />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', margin: '20px 0', padding: '10px', background: '#efefef' }}>
        {searchResults &&
          searchResults.map(item => (
            <div>
              <img
              src={item.image}
              alt={item.alt}
              height={item.height}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
}
