import { motion } from 'framer-motion';
import type { Champion } from '../types/champion.type';

const ChampionTagsToVi = (tags: Champion['tags']) => {
  return tags.map((tag) => {
    switch (tag) {
      case 'Fighter':
        return 'Đấu Sĩ';
      case 'Mage':
        return 'Pháp Sư';
      case 'Assassin':
        return 'Sát Thủ';
      case 'Marksman':
        return 'Xạ Thủ';
      case 'Tank':
        return 'Đỡ Đòn';
      case 'Support':
        return 'Hỗ Trợ';
      default:
        return tag;
    }
  });
};

const getTagIconUrl = (tag: string) => {
  return `https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/role${tag}.svg`;
};

const CDHero = ({ champion }: { champion: Champion }) => {
  return (
    <div
      className="bg-cover bg-center p-8 text-white h-[850px] flex justify-start flex-col font-lol"
      style={{
        backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg)`,
      }}
    >
      <div className="self-end flex flex-col gap-5 items-end">
        {/* Build Legend of Graph */}
        <div className="link-legend-of-graph bg-[#2AA3CC] w-fit px-5 py-3 rounded-xl ">
          <a
            rel="stylesheet"
            target="_blank"
            href={`https://www.leagueofgraphs.com/champions/tier-list/${champion.id.toLowerCase()}`}
          >
            <img src="/images/banner2.png" alt="legends of graph banner" width={80} />
          </a>
        </div>

        {/* Counter */}
        <div className="counter flex flex-col items-center self-center gap-2 bg-[#0d0d28] rounded-xl w-[120px] py-2 ">
          <a
            href={`https://u.gg/lol/champions/${champion.id.toLowerCase()}/counter`}
            target="_blank"
            className="text-amber-200 hover:underline"
          >
            <img
              src="https://static.bigbrain.gg/assets/lol/performance_analysis/images/UGG_Logo_Blue_3.svg"
              alt="ugg logo"
              width={80}
            />
          </a>
          Counter
        </div>
      </div>

      {/* Tên tướng & title */}
      <motion.div
        className="flex gap-5 mt-40"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <h1 className="text-7xl font-bold mb-2 text-shadow-black text-shadow-md">{champion.name}</h1>
          <p className="text-description text-4xl mb-4 text-shadow-black text-shadow-md">{champion.title}</p>
        </div>
      </motion.div>

      {/* Lore và Tags */}
      <div className="flex items-center justify-between">
        {/* Lore */}
        <motion.div
          className="text-base w-1/2 text-justify text-shadow-lg text-shadow-black mt-5"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {champion.lore}
        </motion.div>

        {/* Tags */}
        <motion.div
          className="flex gap-2 tags justify-end items-end self-end flex-col"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {champion.tags.map((tag, index) => (
            <motion.div
              key={tag}
              className="tags-box bg-near-black border-2 border-amber-200 text-center flex flex-col justify-center w-[80px] h-[80px] drop-shadow-2xl"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
            >
              <img src={getTagIconUrl(tag)} alt={tag} className="w-[50%] h-[50%] mb-2 mx-auto fill-tags" />
              <span className="text-[80%]">{ChampionTagsToVi([tag])}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CDHero;
