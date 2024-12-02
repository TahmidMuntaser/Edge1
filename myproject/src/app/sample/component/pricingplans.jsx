
export function PricingPlans() {
    return (
        <div>
            <h1 className="text-2xl md:text-3xl text-slate-800 font-bold text-center pt-8 pb-5">Pricing Plans</h1>
            <table className="m-4 md:m-10 w-full md:w-11/12 bg-white rounded-2xl shadow-lg">
                <thead>
                    <tr>
                        <th className="py-2 px-2 md:px-4 bg-blue-500 text-white rounded-tl-lg">Plan</th>
                        <th className="py-2 px-2 md:px-4 bg-blue-500 text-white">Features</th>
                        <th className="py-2 px-2 md:px-4 bg-blue-500 text-white rounded-tr-lg">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-2 px-2 md:px-4 border-b">Standard</td>
                        <td className="py-2 px-2 md:px-4 border-b">
                            <ul>
                                <li className="list-disc">3 Nights Accommodation</li>
                                <li className="list-disc">City Tour</li>
                            </ul>
                        </td>
                        <td className="py-2 px-2 md:px-4 border-b">$499</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-2 md:px-4 border-b">Deluxe</td>
                        <td className="py-2 px-2 md:px-4 border-b">
                            <ul>
                                <li className="list-disc">5 Nights Accommodation</li>
                                <li className="list-disc">All Meals Included</li>
                                <li className="list-disc">Private Guide</li>
                            </ul>
                        </td>
                        <td className="py-2 px-2 md:px-4 border-b">$999</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}