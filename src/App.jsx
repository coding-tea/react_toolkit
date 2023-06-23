//dependencies
import { useSelector } from 'react-redux';

//css
import './app.css';

function App() {

  const contries = useSelector(state => state.contries.contries);

  return (
    <div className='app'>
      <header>
          react router dom app <a href="https://github.com/coding-tea" target='_blank' rel="noreferrer">@codingTea <i class="bi bi-github"></i></a>
      </header>
      <div className="table">
        <table>
          <tr>
            <th> # </th>
            <th> name </th>
          </tr>
          {
            contries.map(item => <tr>
              <td> {item.id} </td>
              <td> {item.name} </td>
            </tr>)
          }
        </table>
      </div>
    </div>
  );
}

export default App;
