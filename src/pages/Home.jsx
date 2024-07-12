import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Recommended_jobs from "../components/Recommended_jobs";

export default function Home(){
    return (
        <div>
            <Navbar />
            <Hero />
            <Recommended_jobs />
        </div>
    )
}