import React, { useState } from 'react';

import Collections from '../../components/collections/Collections';
import Gallery from '../../components/gallery/Gallery';
import Profile from '../../components/profile/Profile';
import Tabs from '../../components/tabs/Tabs';

function Home() {
  const [activeTab, setActiveTab] = useState("gallery");

  return (
    <div>
      <Profile />
      <Tabs setActiveTab={setActiveTab} />
      {activeTab === "gallery" ? <Gallery /> : <Collections />}
    </div>
  );
}

export default Home;
