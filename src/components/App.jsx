import Searchbar from './Searchbar/Searchbar'
import LoaderFn from './Loader/Loader'
import Button from './Button/Button'
import { Component } from 'react';
// export const App = () => {
//   return (
    // <div>
    //   <Searchbar />
    //   <Button />
    // </div>
//   );
// };

class App extends Component {
  state = {}
  render(){ 
    return (
      <div>
      <Searchbar />
      <LoaderFn/>
      <Button />
    </div>
    )
  }
}
export default App