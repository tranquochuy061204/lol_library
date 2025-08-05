import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CDHero from '../components/CDHero';
import CDSkill from '../components/CDSkill';
import type { Champion } from '../types/champion.type';
import MobileCDHero from '../components/MobileCDHero';

const ChampionDetail = () => {
  const { championId } = useParams();
  const [champion, setChampion] = useState<Champion | null>(null);

  useEffect(() => {
    if (!championId) return;
    fetch(`https://ddragon.leagueoflegends.com/cdn/15.14.1/data/vi_VN/champion/${championId}.json`)
      .then((res) => res.json())
      .then((data) => {
        const typedData = data as { data: Record<string, Champion> };
        const champData = typedData.data[championId];
        setChampion(champData);
      })
      .catch((err: unknown) => {
        console.error('Error fetching champion data:', err);
      });
  }, [championId]);

  if (!champion) return <p className="p-4">Đang tải dữ liệu...</p>;

  return (
    <div className="font-lol">
      <CDHero champion={champion} className="hidden lg:block" />
      <MobileCDHero champion={champion} className="block lg:hidden" />
      <CDSkill champion={champion} />
    </div>
  );
};

export default ChampionDetail;
