import { twMerge } from "tailwind-merge";

export default function FeatureCard (props: {
    title: string;
    description: string;
    children?: React.ReactNode;
    className?: string;
}) {
    const { title, description, children, className } = props;
    return (
        <div className={twMerge("bg-white border border-black p-6 rounded-3xl", className)}>
            <div className="aspect-video">{children}</div>
            <div>
                <h3 className="text-3xl font-medium mt-6">{title}</h3>
                <p className="text-black mt-2">{description}</p>
            </div>
        </div>
    );
}