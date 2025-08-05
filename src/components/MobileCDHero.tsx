import { motion } from 'motion/react';
import type { Champion } from '../types/champion.type';
import { ChampionTagsToVi, getTagIconUrl } from './CDHero';

const MobileCDHero = ({ champion, className }: { champion: Champion; className?: string }) => {
  return (
    <div>
      <div
        className={`mobile-hero bg-cover h-[230px] bg-no-repeat bg-center p-2 text-white w-full flex justify-end flex-col font-lol ${
          className ?? ''
        }`}
        style={{
          backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg)`,
        }}
      >
        <div className="flex justify-between w-full">
          <div className="flex flex-col justify-end">
            <h1 className="text-3xl font-bold text-amber-200 text-shadow-lg text-shadow-black">{champion.name}</h1>
            <p className="text-2xl italic text-shadow-lg text-shadow-black">{champion.title}</p>
          </div>

          <motion.div
            className="flex gap-2 tags justify-end self-end flex-col"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {champion.tags.map((tag, index) => (
              <motion.div
                key={tag}
                className="tags-box   text-center flex flex-col justify-center w-[50px] h-[50px] drop-shadow-2xl"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
              >
                <img src={getTagIconUrl(tag)} alt={tag} className="w-[50%] h-[50%]  mx-auto fill-tags" />
                <span className="text-[80%]">{ChampionTagsToVi([tag])}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <hr className="border-amber-200" />

      <div className="bg-near-black p-5">
        <h2 className="text-4xl mt-2 mb-2 text-center font-bold text-amber-200 italic">Tiểu sử</h2>
        <p className="text-white text-justify">{champion.lore}</p>
      </div>
      <hr className="border-amber-200" />
    </div>
  );
};

export default MobileCDHero;
