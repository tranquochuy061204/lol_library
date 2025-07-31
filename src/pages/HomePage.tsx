import { useEffect, useState } from 'react';
import type { Champion } from '../types/champion.type';
import ChampionCard from '../components/ChampionCard';
import Header from '../components/Header';
import { CiSearch } from 'react-icons/ci';

const HomePage = () => {
  const [championList, setChampionList] = useState<Champion[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>(''); // <- State cho thanh tìm kiếm

  useEffect(() => {
    fetch('https://ddragon.leagueoflegends.com/cdn/15.14.1/data/vi_VN/champion.json')
      .then((res) => res.json())
      .then((data) => {
        const champions = Object.values(data.data) as Champion[];
        setChampionList(champions);
      })
      .catch((err) => console.error('Error fetching champion data:', err));
  }, []);

  const filteredChampions = championList.filter(
    (champion) => champion.name.toLowerCase().includes(searchTerm.toLowerCase()) // Lọc tên
  );

  return (
    <>
      <Header />

      {/* Thanh tìm kiếm */}
      <div className="flex justify-center mt-6">
        <div className="relative w-[300px]">
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 text-xl" />
          <input
            type="text"
            placeholder="Tìm tướng theo tên..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full bg-transparent text-amber-200 border border-amber-200 rounded-lg shadow-md focus:outline-none focus:border-0 focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </div>

      <div className="wrapper">
        <div className="champion-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-7">
          {filteredChampions.map((champion) => (
            <ChampionCard key={champion.id} champion={champion} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
