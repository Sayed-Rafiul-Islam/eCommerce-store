import { Billboard as BillboardType } from "@/types";


interface BillboardProps {
    data : BillboardType | undefined
}

const Billboard : React.FC<BillboardProps>= ({
    data
}) => {
    return ( 
        <div className="p-6 lg:p-8 sm:p-6 rounded-xl overflow-hidden">
            <div 
                style={{ backgroundImage : `url(${data?.imageUrl})`}}
                className="rounded-xl relative aspect-square md:aspect-square-[2.4/1] overflow-hidden bg-cover
                lg:w-[1200px] lg:h-[500px] md:w-[900px] md:h-[400px] sm:w-[700px] sm:h-[200px] w-[450px] h-[200px]"
            >
                <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                    <div className="font-bold text-3xl sm:text-5xl lg:text-6xl max-w-xs sm:max-w-xl ">
                        {data?.label}
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default Billboard;