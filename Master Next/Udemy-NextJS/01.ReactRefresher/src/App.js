import {Route, Routes } from 'react-router-dom';
import AllMeetings from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
import Layout from './components/ui/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetings />} />
        <Route path='/new-meetup' element={<NewMeetup />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>

    </Layout>
  );
}

export default App;
