import { Link } from 'react-router-dom';
import type { ChampionCardProps } from '../types/champion.type';

const ChampionCard = ({ champion }: ChampionCardProps) => {
  return (
    <Link
      to={`/${champion.id}`}
      className="champion-card relative group overflow-hidden rounded-xl shadow-lg cursor-pointer "
    >
      <div className="champion-image transition-transform duration-500 scale-105 group-hover:scale-110 ">
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
          alt={champion.name}
        />
      </div>
      <div className="absolute inset-0 w-2xl bg-gradient-to-r from-sky-300/20 to-blue-700/20 opacity-0 group-hover:opacity-100 group-hover:animate-slideFade" />
      <div className="champion-name text-4xl text-eff bottom-10 sm:hidden lg:block animate-eff">{champion.name}</div>
      <div className="champion-title text-2xl text-eff bottom-0 sm:hidden lg:block animate-eff">{champion.title}</div>

      <div className="mobile-info mt-3 ">
        <div className="mb-champion-name  text-2xl text-eff bottom-10 lg:hidden md:block ">{champion.name}</div>
        <div className="mb-champion-title  text-xl text-eff bottom-0 lg:hidden md:block ">{champion.title}</div>
      </div>
    </Link>
  );
};

export default ChampionCard;
