import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CDHero from '../components/CDHero';
import CDSkill from '../components/CDSkill';
import type { Champion } from '../types/champion.type';

const ChampionDetail = () => {
  const { championId } = useParams();
  const [champion, setChampion] = useState<Champion | null>(null);

  useEffect(() => {
    fetch(`https://ddragon.leagueoflegends.com/cdn/15.14.1/data/vi_VN/champion/${championId}.json`)
      .then((res) => res.json())
      .then((data) => {
        const champData = data.data[championId as string];
        setChampion(champData);
      })
      .catch((err) => console.error('Error fetching champion detail:', err));
  }, [championId]);

  if (!champion) return <p className="p-4">Đang tải dữ liệu...</p>;

  return (
    <div className="font-lol">
      <CDHero champion={champion} />
      <CDSkill champion={champion} />
    </div>
  );
};

export default ChampionDetail;
