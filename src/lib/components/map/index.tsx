export default function MakeMap() {
  return (
    <div className="relative  h-fit w-fit">
      <object
        aria-label="svg"
        className="min-[778px]:w-[508px] w-[310px]"
        type="image/svg+xml"
        data={"/svg/NG-map.svg"}
      ></object>

      <div className="marker absolute cursor-pointer min-[778px]:left-[10.8rem] left-[6.8rem] top-[7.8rem] min-[778px]:top-[12.9rem] w-2 h-2 rounded-full bg-red-600">
        <div className="tooltip absolute left-[-55px] top-[-40px] w-[128px]  shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)] rounded-md h-8 bg-white flex items-center justify-center">
          <p className="text-xs">Baby Davida</p>
        </div>
      </div>
      <div className="marker absolute cursor-pointer min-[778px]:left-[12.3rem] left-[7.2rem] top-[7.8rem] min-[778px]:top-[12.9rem] w-2 h-2 rounded-full bg-red-600">
        <div className="tooltip absolute left-[-55px] top-[-40px] w-[128px]  shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)] rounded-md h-8 bg-white flex items-center justify-center">
          <p className="text-xs">Chukwumas Story</p>
        </div>
      </div>
      <div className="marker absolute cursor-pointer min-[778px]:left-[11.3rem] left-[6.8rem] top-[8.3rem] min-[778px]:top-[13.5rem] w-2 h-2 rounded-full bg-red-600">
        <div className="tooltip absolute left-[-55px] top-[-40px] w-[128px]  shadow-[2px_6px_27px_-6px_rgba(0,0,0,0.3)] rounded-md h-8 bg-white flex items-center justify-center">
          <p className="text-xs">Sunday David Story</p>
        </div>
      </div>
    </div>
  );
}

// bg-[rgba(62,77,98,0.11)]
