import Searchbar from './Searchbar/Searchbar'
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
      <Button />
    </div>
    )
  }
}
export default App