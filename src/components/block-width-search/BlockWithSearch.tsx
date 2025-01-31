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
        {status === 'loading' &&
          <>Loading...</>
        }
        {searchResults && status === 'loaded' &&
          searchResults.map(item => (
            <div key={item.id}>
              <img
              src={item.url}
              alt={item.alt}
              height={item.height}
              />
            </div>
          ))
        }
        {status === 'error' &&
          <>An error occurred when uploading the data</>
        }
      </div>
    </div>
  );
}
