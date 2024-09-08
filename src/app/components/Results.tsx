import Image from "next/image"

export default function Results() {
    return (
        <section className="bg-slate-900 px-5 py-6 text-center text-white lg:rounded-es-[4rem]">
                <div className="mx-auto h-full max-w-lg lg:mx-auto lg:flex lg:flex-col lg:place-content-center lg:place-items-center">
                    <Image
                        alt=""
                        src="/assets/images/illustration-empty.svg"
                        width="200"
                        height="200"
                        className="mx-auto mb-4"
                    />
                    <h2 className="mb-2 text-xl font-bold">
                        Results shown here
                    </h2>
                    <p className="text-sm text-slate-300">
                        Complete the form and click “calculate repayments” to
                        see what your monthly repayments would be.
                    </p>

                    {/* <!-- Completed results start --> */}
                    <div className="sr-only text-left">
                        <h2 className="mb-2 text-xl font-bold">Your results</h2>
                        <p className="mb-5 text-sm text-slate-300">
                            Your results are shown below based on the
                            information you provided. To adjust the results,
                            edit the form and click “calculate repayments”
                            again.
                        </p>
                        <div className="mx-auto rounded-lg border-t-4 border-t-lime bg-black bg-opacity-20 p-4">
                            <dl>
                                <div>
                                    <dt className="text-sm text-slate-300">
                                        Your monthly repayments
                                    </dt>
                                    <dd className="text-3xl font-bold text-lime">
                                        &pound;9,999
                                    </dd>
                                </div>
                                <hr className="my-3 border-slate-500" />
                                <div>
                                    <dt className="text-sm text-slate-300">
                                        Total you'll repay over the term
                                    </dt>
                                    <dd className="text-2xl">&pound;15,000</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </section>
    )
}