import { useEffect, useRef, useState } from 'react';
import Socials from './Socials';

const DESCRIPTION = `I  am a software engineer who enjoys building scalable, engaging
systems. My background in Computer Science and Engineering from the
University of Mines and Technology gives me a solid grip on low-level
fundamentals  alongside  my software skills. Outside work, I build tools
that streamline my workflow or solve problems i find interesting.
#DOING HARD THINGS
`;
const SPEED = 10;
const Description = () => {
  const [contents, setContents] = useState('');
  const posRef = useRef(0);

  useEffect(() => {
    const interValId = setInterval(() => {
      if (posRef.current >= DESCRIPTION.length - 1) {
        clearInterval(interValId);
        return;
      }
      setContents((prev) => prev + DESCRIPTION[posRef.current]);
      posRef.current += 1;
    }, SPEED);

    return () => {
      clearInterval(interValId);
    };
  }, []);

  return (
    <div className="flex flex-col gap-5 w-full sm:w-[55%]">
      <h1 className="text-3xl">Hello, My name is Desmond Opoku Mends</h1>
      <div>
        <p className="text-lg/relaxed min-h-48">
          {contents}
          {posRef.current < DESCRIPTION.length - 1 && '_'}
        </p>
      </div>
      <Socials />
    </div>
  );
};

export default Description;
