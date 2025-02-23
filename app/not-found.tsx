import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-0">
        <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-foreground via-foreground to-foreground bg-clip-text text-[64px] box-content font-extrabold text-transparent text-center select-none">
          Coming Soon!
        </span>
        <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-[#d3d0d0] via-[#666666] to-[#e2dede] bg-clip-text text-[64px] font-extrabold text-transparent text-center select-auto">
          Coming Soon!
        </h1>
      </div>
      <Link href="/" className="">
        <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-foreground via-foreground to-foreground bg-clip-text text-[24px] box-content font-extrabold text-transparent text-center select-none">
          Return Home
        </span>
        <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-[#666666] via-[#666666] to-[#666666] bg-clip-text text-[24px] font-extrabold text-transparent text-center select-auto">
          Return Home
        </h1>
      </Link>
    </div>
  );
}
