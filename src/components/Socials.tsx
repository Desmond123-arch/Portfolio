import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { socialsLotties } from '#/lib/constants';
import type { lottieConfig } from '#/lib/constants';

const SocialsIcon = ({ link, path, title }: lottieConfig) => {
  return (
    <a href={link} className="size-15 block">
      <DotLottieReact
        loop
        // loopCount={4}
        src={path}
        autoplay
        className="w-full h-full"
      />
      <p className="text-xs text-center"> {title}</p>
    </a>
  );
};

const Socials = () => {
  return (
    <div className="flex flex-row w-max gap-10">
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
