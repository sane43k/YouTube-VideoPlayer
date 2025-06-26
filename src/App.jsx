import './styles/main.scss'
import './App.scss';
import Header from './components/Header/Header';
import VideoPlayerPage from './pages/VideoPlayerPage/VideoPlayerPage';
import Aside from './components/Aside/Aside';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Aside></Aside>
      <main className="main-content">
        <VideoPlayerPage></VideoPlayerPage>
      </main>
    </div>
  );
}

export default App;
