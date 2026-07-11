import Description from '#/components/Description';
import MyAvatar from '#/components/Svg';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: Home });

function Home() {
  return (
    <div className="w-full mt-10 px-10 flex flex-row  justify-between items-center">
      <MyAvatar />
      <Description />
    </div>
  );
}
