//Esse compoente foi gerado por ia, ele basicamente faz uma conta pra mostarar as estrelas de avalicao 
//conforme o rate que vem da api
import { Star, StarHalf } from "lucide-react";

export default function StarRating({ rate, count, size = "w-4 h-4" }){
return(
    <div className="flex items-center">
      <div className="flex text-yellow-400 gap-0.5">
        {[...Array(5)].map((_, i) => {
          const index = i + 1;
          if (index <= Math.floor(rate)) {
            return <Star key={i} className={`${size} fill-current`} />;
          } else if (index === Math.ceil(rate) && !Number.isInteger(rate)) {
            return <StarHalf key={i} className={`${size} fill-current`} />;
          }
          return <Star key={i} className={`${size} text-slate-200`} />;
        })}
      </div>
      {count && (
        <span className="text-xl text-slate-400 ml-2"> {rate} </span>
      )}
    </div>
)
}
