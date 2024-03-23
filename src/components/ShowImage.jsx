
export default function ShowImage({ arr }) {
    let show
    if(arr){
    show =  arr.map((item , i) => {
               return(
                <div key={i} className="">
                    <img  src={item.urls.full} alt={item.alt_description} className="w-[330px] h-[330px] object-cover" />

                </div>
               )
             })
    }else{
        show = 'search..'
    }
    
  return (
    <div className="w-[990px] mx-auto grid grid-cols-3 gap-1 my-8">
      {show}
      {show}
      {show}
    </div>
  );
}
 