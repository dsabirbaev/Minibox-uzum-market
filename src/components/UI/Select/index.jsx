import { Select, Option } from "@material-tailwind/react";

export default function SelectDefault() {
    return (
        <div className="w-72">
            <Select label="Select Version" className="rounded-sm border">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
            </Select>
        </div>
    );
}