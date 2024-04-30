import { range } from './utils';

function Grid({ numRows, numCols }) {

  let rows = range(1,numRows + 1);
  let cols = range(1,numCols + 1);
  console.log('rows: '+rows +"\ncols: "+cols);

  return (
    <div className="grid">
      {
        rows.map((row) => (
          <div key={row} className="row">
            {
              cols.map((col) => (
                <div key={col} className="cell"></div>
              ))
            }
          </div>
        ))
      }
    </div>
  );
}

export default Grid;