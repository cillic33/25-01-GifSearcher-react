import {Button} from "../button/Button";
import {useAppDispatch, useAppSelector} from "../../store/redux-hook";
import {giphyActions, giphySelectors} from "../../store/slices/giphySlice";

export const BlockWithTrends = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(giphySelectors.status);
  const trendsResults = useAppSelector(giphySelectors.trendsResults);

  const handleClick = () => {
    dispatch(giphyActions.fetchTrendsResults())
  }

  return (
    <div>
      <h1>TRENDS</h1>

      <Button title="Get Trends Images" onClick={handleClick} />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', margin: '20px 0', padding: '10px', background: '#efefef' }}>
        {status === 'loading' &&
          <>Loading...</>
        }
        {trendsResults && status === 'loaded' &&
          trendsResults.map(item => (
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
