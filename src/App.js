import './App.css';
import { Users } from './questions/Users';
import { Products } from './questions/Products';
import { Profile } from './questions/Profile';
import { UserFeed } from './questions/UserFeed';
import { Chat } from './questions/Chat';
import { Comments } from './questions/Comments';
function App() {
  return (
    <div className="App">
      <Users />
      
      <Products />

      <Profile heading={"User Profile"} userWidht={"200px"} userHeight={"200px"}/>

      <UserFeed />

      <Chat />

      <Comments />
    </div>
  );
}

export default App;
