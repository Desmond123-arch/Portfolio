import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { socialsLotties } from '#/lib/constants';
import type { lottieConfig } from '#/lib/constants';

const SocialsIcon = ({ link, path, title }: lottieConfig) => {
  return (
    <div>
      <a href={link} className="size-10 md:size-15 block" target="_blank">
        <DotLottieReact
          loop
          // loopCount={4}
          src={path}
          autoplay
          className="w-full h-full"
        />
      </a>
      <p className="text-xs text-center mt-1"> {title}</p>
    </div>
  );
};

const Socials = () => {
  return (
    <div className="flex flex-row w-full md:w-max gap-10">
      {socialsLotties.map((lottie, idx) => (
        <SocialsIcon
          key={idx}
          link={lottie.link}
          path={lottie.path}
          title={lottie.title}
        />
      ))}
    </div>
  );
};

export default Socials;
