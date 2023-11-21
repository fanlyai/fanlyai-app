import Select from "@/components/Select";
import Input from "../../../components/Input";



export default function Add(){
    const options = [
        // Add your options here, for example:
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        // Add more options as needed
    ];
    return(
        <div className="bg-white w-full p-8">
           <Input placeholder="Test"></Input>
           <Select defaultValue="select" placeholder="test" options={options}></Select>
        </div>
    )
}