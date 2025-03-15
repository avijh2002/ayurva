import TeamCard from "./TeamCard"

const Team = () => {
  return (
    <div className="max-w-[1280px] mx-auto h-auto flex-col items-center">
        <div className="h-[58px] w-[344px] text-[40px] font-medium mx-auto mt-[104px] mb-[56px]">Meet our Team</div>
        
        <div className=" border-amber-950 ml-[163px] mr-[96px] h-[665px]  mb-[136px]"><TeamCard/></div>

    </div>
  )
}

export default Team