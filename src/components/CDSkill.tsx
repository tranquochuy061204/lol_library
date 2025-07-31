import { useState } from 'react';
import type { Champion } from '../types/champion.type';

const getSkillCode = (index: number) => {
  const codes = ['Q', 'W', 'E', 'R'];
  return codes[index] || '';
};

const CDSkill = ({ champion }: { champion: Champion }) => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>('P');

  const championId = champion.key.padStart(4, '0'); // Đảm bảo có 4 chữ số

  const getVideoUrl = () => {
    if (!selectedSkill) return undefined;
    return `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${championId}/ability_${championId}_${selectedSkill}1.mp4`;
  };

  return (
    <div className="Skill p-5">
      <h2 className="text-6xl mb-8 text-center font-bold text-amber-200">
        <em>Kỹ năng</em>
      </h2>
      <div className="flex items-center justify-center flex-col gap-5 ">
        {/* Video hiện ra khi chọn kỹ năng */}
        {selectedSkill && (
          <video
            key={selectedSkill}
            className="aspect-16/9 w-[50%] h-[50%] border-amber-200 border-2 p-3 rounded-2xl"
            autoPlay
            loop
            muted
          >
            <source src={getVideoUrl()} type="video/mp4" />
            Trình duyệt không hỗ trợ video.
          </video>
        )}

        {/* Các icon kỹ năng */}
        <div
          className={`skill-icon items-center flex gap-5 border-2 border-amber-200 p-5 rounded-lg bg-[#0a1428] overflow-hidden   `}
        >
          {/* Nội tại (P) */}
          <div
            onClick={() => setSelectedSkill('P')}
            className={`${
              selectedSkill === 'P' ? 'glow-border z-0' : 'border-amber-50'
            } spell overflow-hidden cursor-pointer hover:scale-105 transition  relative
   `}
          >
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/15.14.1/img/passive/${champion.passive.image.full}`}
              alt="Passive"
              className={`rounded z-10 ${selectedSkill === 'P' ? 'm-[3px]' : ''} relative`}
            />
          </div>

          {/* Q, W, E, R */}
          {champion.spells.map((spell, index) => {
            const code = getSkillCode(index);
            const isSelected = selectedSkill === code;
            return (
              <div
                key={spell.id}
                onClick={() => setSelectedSkill(code)}
                className={`spell relative cursor-pointer overflow-hidden hover:scale-105 transition  w-fit h-fit
        ${isSelected ? 'glow-border z-0' : 'border-amber-200 border-2'}
      `}
              >
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/15.14.1/img/spell/${spell.id}.png`}
                  alt={spell.name}
                  className={`rounded z-10 ${isSelected ? 'm-[3px]' : ''} relative`}
                />
              </div>
            );
          })}
        </div>

        {/* Mô tả kỹ năng */}
        <div className="skill-description text-center text-amber-200">
          {selectedSkill === 'P' ? (
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-bold">{champion.passive.name}</h3>
              <p dangerouslySetInnerHTML={{ __html: champion.passive.description }} className="w-[40%]" />
            </div>
          ) : (
            champion.spells.map((spell, index) => {
              const skillCode = getSkillCode(index);
              if (skillCode === selectedSkill) {
                return (
                  <div key={spell.id} className="flex flex-col items-center">
                    <h3 className="text-lg font-bold">{spell.name}</h3>
                    <p dangerouslySetInnerHTML={{ __html: spell.description }} className="w-[40%]" />
                  </div>
                );
              }
              return null;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default CDSkill;
