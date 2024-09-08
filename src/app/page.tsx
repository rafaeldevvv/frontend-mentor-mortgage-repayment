import Form from "./components/Form";
import Results from "./components/Results";

export default function MainPage() {
    return (
        <div className="lg:mx-auto lg:my-28 lg:grid lg:max-w-4xl lg:grid-cols-2 lg:overflow-hidden lg:rounded-3xl lg:bg-white lg:shadow-xl">
            <Form />
            <Results />
        </div>
    );
}
