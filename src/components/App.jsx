import Searchbar from './Searchbar/Searchbar'
import LoaderFn from './Loader/Loader'
import Button from './Button/Button'
import { Component } from 'react';
import s from './App.module.css'
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

componentDidMount() { 
  fetch()
 }

  render(){ 
    return (
      <div className={s.App}>
      <Searchbar />
      <LoaderFn/>
      <Button />
    </div>
    )
  }
}
export default App