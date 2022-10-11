import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
function importAll(r: any) {

    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;

  }

const images = importAll(require.context('../assets/', false, /\.(png|jpe?g|svg)$/));
console.log(images)

export default function Example(props: any) {
    
    return (
        <div className="relative group w-[80vw] h-[70vh]">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-200 to-sky-400 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative rounded-xl bg-slate-800 flex-col h-full items-center pt-6">
                <div className="text-3xl text-slate-100 w-fit">{props.title}</div>
                <div className="text-slate-100">Tech Stack</div>
                <div className="flex space-x-12 overflow-x-auto bg-slate-500 backdrop-blur w-fit rounded-xl">
                {
                     props.techList.map((item: string)=> <img className="h-10" src={images[item + ".svg"]}/>)
                }   
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-blue text-slate-100">Learn More</button>
                </div>
            </div>
        </div>
    );
}