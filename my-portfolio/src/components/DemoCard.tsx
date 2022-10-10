import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";

const techList = ["Django", "Bootstrap", "SQLite", "AWS"]

function importAll(r: any) {

    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;

  }

const images = importAll(require.context('../Assets/', false, /\.(png|jpe?g|svg)$/));
console.log(images)

export default function Example() {
    
    return (
        <div className="rounded-xl bg-slate-900 shadow-xl w-[80vw] h-[70vh]">
            <div className="card-body">
                <span className="text-3xl">Court booking app</span>
                <p>Tech Stack</p>
                <div className="flex space-x-12 overflow-x-auto">
                {
                     techList.map((item)=> <img className="h-10" src={images[item + ".svg"]}/>)
                }   
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-blue">Learn More</button>
                </div>
            </div>
        </div>
    );
}