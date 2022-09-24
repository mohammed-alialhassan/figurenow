

export default function Footer() {

    return (
    <>
        <div className="mx-auto py-4 sm:py-2 bg-gray-300 shadow flex-column">
            <div className="mx-auto pb-2 sm:py-2 flex justify-center ">
                <a href="/recipes" className="px-2 text-xs text-blue-500 sm:text-sm"> Recipes </a>
                <a href="/exercises" className="px-2 text-xs text-blue-500 sm:text-sm"> Exercises </a>
                <a href="/counter" className="px-2 text-xs text-blue-500 text-center sm:text-sm"> Calorie Counter</a>
                <a href="/about" className="px-2 text-xs text-blue-500 sm:text-sm"> About </a>
                <a href="/community" className="px-2 text-xs text-blue-500 text-center sm:text-sm"> Community Guidelines </a>
                <a href="/api" className="px-2 text-xs text-blue-500 sm:text-sm"> API </a>
                <a href="/contact-us" className="px-2 text-xs text-center text-blue-500 sm:text-sm"> Contact Us </a>
            </div>
            <div className="mx-auto py-2 flex justify-center text-xs">
             <h2> @2022 Beniyasha</h2>   
            </div>
        </div>
    </>
    )
}